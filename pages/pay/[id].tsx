import { Box, Button, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Wallet from "../../components/Wallet";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from 'next/router'
import { Token, tokens } from "../../util/tokens";
import { useColor } from "../../hooks/useColor";
import { DecodedPath, decodeLinkPath } from "../../util/linkPathCodec";
import { ethers } from "ethers";
import { ERC20, ERC20__factory, Wisp__factory } from "../../contracts";
import { WISP_CONTRACT } from "../../util/contracts";

const PaymentOneTime = () => {
  const router = useRouter();
  const id = router.query.id;

  const { account, connectWallet, disconnect, isWalletLoading, web3Provider } = useContext(AuthContext);

  const [error, setError] = useState<string>("");

  const { textColor, inputColor } = useColor();
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
    if(!web3Provider) {
      connectWallet();
    }

    if (!requestedToken || !web3Provider) {
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
    if (!tokenContract || !requestedAmount) {
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
    if(!web3Provider) {
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

const PaymentPermanent = () => {
  const router = useRouter();
  const id = router.query.id;
  const [value, setValue] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined
  );

  const { textColor, inputColor, inputHover, chevronIcon } = useColor();


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
        <Text color={textColor} textStyle="app_reg_14" ml="8px" mt="2px">
          {token.name + ` (${token.symbol})`}
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Box>
        <Text color={textColor} textStyle="app_med_18" textAlign="center">
          Payment
        </Text>
      </Box>
      <Box>
        <Text color={textColor} textStyle="app_reg_14" textAlign="center">
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
            color={textColor}
            backgroundColor={inputColor}
            _hover={{ bg: inputHover }}
            _active={{ bg: "neutral_800" }}
            rightIcon={
              <Image
                src={chevronIcon}
                alt="Chevron Down"
                width="16px"
                height="16px"
              />
            }
          >
            {!!selectedToken ? token(selectedToken) : "Select Token"}
          </MenuButton>
          <MenuList backgroundColor={inputColor} borderWidth="0px">
            {
              tokens.map(it => {
                return (
                  <MenuItem
                    key={it.address}
                    _hover={{ bg: inputHover }}
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
          color={textColor}
          borderWidth="0px"
          backgroundColor={inputColor}
          isDisabled={!selectedToken}
          onChange={handleValueChange}
        />

        {/* TODO: Add conversion to USD */}
        {/* <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
          ~ 0 USD
        </Text> */}
      </Box>

      {error && <Text mt="12px" color={textColor} textStyle="app_reg_14" textAlign="center">
        {`You don't have enough token on your account`}
      </Text>}

      <Box
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
        onClick={() => console.log('Click Button')}
      >
        Approve Payment
      </Box>
    </Box>
  )
};

const Request = () => {
  const { account } = useContext(AuthContext);

  const { blockColor, logoMd, requestBG } = useColor();

  return (
    <Box backgroundColor={requestBG} height="100vh">
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
            backgroundColor={blockColor}
            borderRadius="6px"
            mt="32px"
          >
            <PaymentOneTime/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Request;
