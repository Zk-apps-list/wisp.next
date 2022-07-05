import { Box, Button, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Wallet from "../../components/Wallet";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from 'next/router'
import { Token, tokens } from "../../util/tokens";
import { DecodedPath, decodeLinkPath } from "../../util/linkPathCodec";
import { BigNumber, ethers } from "ethers";
import { ERC20, ERC20__factory, Wisp__factory } from "../../contracts";
import { WISP_CONTRACT } from "../../util/contracts";
import { getDepositData } from "../../util/deposit";
import { Keypair } from "../../util/keypair";

type Props = { id: string }

const PaymentOneTime = ({ id }: Props) => {
  const { account, connectWallet, disconnect, isWalletLoading, web3Provider } = useContext(AuthContext);

  const [error, setError] = useState<string>("");

  const [balance, setBalance] = useState<string | undefined>();
  const [requestedAmount, setRequestedAmount] = useState<string | undefined>();
  const [requestedToken, setRequestedToken] = useState<Token | undefined>();
  const [tokenContract, setTokenContract] = useState<ERC20 | undefined>();
  const [needsApproval, setNeedsApproval] = useState<boolean>();
  const [decodedPath, setDecodedPath] = useState<DecodedPath | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const decodedPath = decodeLinkPath(id as string);
    setDecodedPath(decodedPath);
    setRequestedAmount(ethers.utils.formatEther(decodedPath.amount));
    setRequestedToken(tokens.find(it => it.address === decodedPath.token));
  }, [id]);

  useEffect(() => {
    if (!web3Provider) {
      connectWallet();
    }

    if (!requestedToken || !web3Provider || !account) {
      return;
    }

    const tokenContract = ERC20__factory.connect(requestedToken.address, web3Provider.getSigner(0));
    setTokenContract(tokenContract);
    if(account) {
      tokenContract.balanceOf(account)
        .then(balance => setBalance(ethers.utils.formatEther(balance)))
        .catch(console.log);
    }
  }, [requestedToken, account, web3Provider]);

  useEffect(() => {
    if (!tokenContract || !requestedAmount || !account) {
      return;
    }

    if(account) {
      tokenContract.allowance(account, WISP_CONTRACT)
        .then(allowance => setNeedsApproval(ethers.utils.parseEther(requestedAmount).gt(allowance)))
        .catch(console.log);
    }
  }, [tokenContract, account, requestedAmount]);

  const approvePayment = async () => {
    if (!tokenContract || !requestedAmount) {
      return;
    }

    try {
      setIsLoading(true);
      const transaction = await tokenContract.approve(WISP_CONTRACT, ethers.utils.parseEther(requestedAmount));
      await transaction.wait(1);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const executePayment = async () => {
    if (!web3Provider) {
      connectWallet();
    }

    if (!web3Provider || !decodedPath) {
      return;
    }

    const wisp = Wisp__factory.connect(WISP_CONTRACT, web3Provider.getSigner(0));
    const [proof] = ethers.utils.defaultAbiCoder.decode(["uint256[8]"], decodedPath.proof);

    try {
      setIsLoading(true);
      const transaction = await wisp.deposit(
        [proof[0], proof[1]],
        [[proof[2], proof[3]], [proof[4], proof[5]]],
        [proof[6], proof[7]],
        decodedPath.commitment,
        decodedPath.publicKey,
        decodedPath.amount,
        decodedPath.token,
        decodedPath.encryptedData
      );
      await transaction.wait(1);
      console.log(transaction);
    } catch (error: any) {
      setError(error.reason);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box backgroundColor="neutral.0" p="24px" borderRadius="12px" borderWidth="1px" borderColor="neutral.100">
      <Text color="neutral.800" textStyle="app_med_18" textAlign="center">
        Payment Request
      </Text>
      {!account && <Text color="neutral.400" textStyle="app_reg_14" textAlign="center">
        Please connect your wallet to make payment
      </Text>}
      <Box borderRadius="12px" backgroundColor="light_neutral.50" p="16px" mt="16px">
        {account && <Text color="neutral.500" textStyle="app_reg_14" textAlign="center">
          Your balance: {balance} {requestedToken?.symbol}
        </Text>}
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Image
              src={`/icons/${requestedToken?.symbol.toLowerCase()}_logo.svg`}
              alt="Token Logo"
              width="30px"
              height="30px"
            />
          </Box>
          <Box ml="8px">
            <Text color="neutral.800" textStyle="app_reg_24">{requestedAmount} {requestedToken?.symbol}</Text>
          </Box>
        </Box>
        {/* TODO: Add conversion to USD */}
        {/* <Box mt="4px" textAlign="center">
          <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
            ~ 0 USD
          </Text>
        </Box> */}
      </Box>
      {error && <Text mt="12px" color={"red"} textStyle="app_reg_14" textAlign="center">
        {`Error: ${error}`}
      </Text>}

      {!account
        ? <Box
            mt="32px"
            textAlign="center"
          >
            <Wallet
              account={account}
              connectWallet={connectWallet}
              disconnect={disconnect}
              isLoading={isWalletLoading}
            />
          </Box>
        : (
          <Box
            as={Button}
            backgroundColor="primary.800"
            borderRadius="6px"
            mt="32px"
            py="12px"
            width="100%"
            textAlign="center"
            leftIcon={
              <Image
                src="/icons/chain.svg"
                alt="Chevron Down"
                width="16px"
                height="16px"
              />
            }
            _hover={{ bg: "primary.700" }}
            color="neutral.0"
            textStyle="app_reg_14"
            isLoading={isLoading}
            onClick={needsApproval ? approvePayment : executePayment}
          >
            {needsApproval ? "Approve Payment" : "Pay"}
          </Box>
        )}
    </Box>
  )
};

const PaymentPermanent = ({ id }: Props) => {
  const { account, web3Provider } = useContext(AuthContext);

  const [value, setValue] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<Token | undefined>();
  const [allowance, setAllowance] = useState<BigNumber | undefined>();
  const [sharedKeypair, setSharedKeypair] = useState<Keypair | undefined>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const publicKey = "0x" + id.slice(0, 64);
    const encryptionKey = Buffer.from(id.slice(64, 128), "hex").toString("base64");

    setSharedKeypair(Keypair.fromSharedKey(publicKey, encryptionKey));
  }, [id])

  useEffect(() => {
    if (!selectedToken || !web3Provider || !account) {
      return
    }

    const tokenContract = ERC20__factory.connect(selectedToken.address, web3Provider.getSigner(0));
    tokenContract.allowance(account, WISP_CONTRACT)
      .then(allowance => setAllowance(allowance))
      .catch(console.log);
  }, [selectedToken, web3Provider, account]);

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
  }

  const token = (token: Token) => {
    return (
      <Box flexDirection="row" display="flex">
        <Box>
          <Image
            src={`/icons/${token.symbol.toLowerCase()}_logo.svg`}
            alt={`${token.name} Logo`}
            width="24px"
            height="24px"
          />
        </Box>
        <Text color="light_neutral.800" textStyle="app_reg_14" ml="8px" mt="2px">
          {token.name + ` (${token.symbol})`}
        </Text>
      </Box>
    );
  }

  const approvalNeeded = (value: string | undefined): boolean => {
    if (!value || !allowance) {
      return true;
    }

    return ethers.utils.parseEther(value).gt(allowance);
  }

  const actionButton = (text: string, action: () => void) => {
    return (<Box
      as={Button}
      backgroundColor="primary.800"
      borderRadius="6px"
      mt="12px"
      py="12px"
      width="100%"
      textAlign="center"
      leftIcon={
        <Image
          src="/icons/chain.svg"
          alt="Chevron Down"
          width="16px"
          height="16px"
        />
      }
      _hover={{ bg: "primary.700" }}
      color="neutral.0"
      textStyle="app_reg_14"
      isDisabled={!selectedToken || !value}
      onClick={action}
    >
      {text}
    </Box>);
  }

  const approvePayment = async () => {
    if (!selectedToken || !web3Provider || !value) {
      return
    }

    const valueAsBigNumber = ethers.utils.parseEther(value);
    const tokenContract = ERC20__factory.connect(selectedToken.address, web3Provider.getSigner(0));
    const transaction = await tokenContract.approve(WISP_CONTRACT, valueAsBigNumber);
    await transaction.wait(1);
    setAllowance(valueAsBigNumber);
  }

  const executePayment = async () => {
    if (!selectedToken || !web3Provider || !value || !sharedKeypair) {
      return
    }

    const valueAsBigNumber = ethers.utils.parseEther(value);
    const depositData = await getDepositData(sharedKeypair, valueAsBigNumber, selectedToken.address);
    const [proof] = ethers.utils.defaultAbiCoder.decode(["uint256[8]"], depositData.proof);
    const wisp = Wisp__factory.connect(WISP_CONTRACT, web3Provider.getSigner(0));
    const transaction = await wisp.deposit(
      [proof[0], proof[1]],
      [[proof[2], proof[3]], [proof[4], proof[5]]],
      [proof[6], proof[7]],
      depositData.commitment,
      "0x" + Buffer.from(depositData.publicKey).toString("hex"),
      "0x" + Buffer.from(depositData.amount).toString("hex"),
      "0x" + Buffer.from(depositData.token).toString("hex"),
      "0x" + depositData.encryptedData.toString("hex")
    );
    await transaction.wait(1);
    console.log(transaction);
  }

  return (
    <Box>
      <Box>
        <Text color="light_neutral.800" textStyle="app_med_18" textAlign="center">
          Payment
        </Text>
      </Box>
      <Box>
        <Text color="light_neutral.800" textStyle="app_reg_14" textAlign="center">
          You can make any contribution you want
        </Text>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            mt="32px"
            width="100%"
            textAlign={"left"}
            color="light_neutral.800"
            backgroundColor="light_neutral.0"
            _hover={{ bg: "light_neutral.50" }}
            _active={{ bg: "neutral_800" }}
            rightIcon={
              <Image
                src="/icons/chevron_down.svg"
                alt="Chevron Down"
                width="16px"
                height="16px"
              />
            }
          >
            {!!selectedToken ? token(selectedToken) : "Select Token"}
          </MenuButton>
          <MenuList backgroundColor="light_neutral.0" borderWidth="0px">
            {
              tokens.map(it => {
                return (
                  <MenuItem
                    key={it.address}
                    _hover={{ bg: "light_neutral.50" }}
                    _focus={{ bg: "neutral_800" }}
                    onClick={() => setSelectedToken(it)}
                  >
                    {token(it)}
                  </MenuItem>
                );
              })
            }
          </MenuList>
        </Menu>

        <Input
          mt="16px"
          value={value}
          placeholder="0"
          color="light_neutral.800"
          borderWidth="0px"
          backgroundColor="light_neutral.0"
          isDisabled={!selectedToken}
          onChange={handleValueChange}
        />

        {/* TODO: Add conversion to USD */}
        {/* <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
          ~ 0 USD
        </Text> */}
      </Box>

      {error && <Text mt="12px" color="light_neutral.800" textStyle="app_reg_14" textAlign="center">
        {`You don't have enough token on your account`}
      </Text>}

      {
        approvalNeeded(value) ?
          actionButton("Approve Payment", approvePayment) :
          actionButton("Pay", executePayment)
      }
    </Box>
  )
};

const Request = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Box backgroundColor="light_neutral.100" height="100vh">
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Box display="flex" justifyContent="center">
            <Image src="/icons/logo-md.svg" alt="logo" width="72px" height="45px" />
          </Box>
          <Box
            width="400px"
            backgroundColor="light_neutral.100"
            borderRadius="6px"
            mt="32px"
          >
            {
              id && (id as string).length === 128 ?
                <PaymentPermanent id={id as string}/> :
                <PaymentOneTime id={id as string}/>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Request;
