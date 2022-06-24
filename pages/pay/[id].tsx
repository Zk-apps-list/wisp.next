import { Box, Button, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Wallet from "../../components/Wallet";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from 'next/router'
import { Token, tokens } from "../../util/tokens";
import { useColor } from "../../hooks/useColor";
import { LinkCodec } from "../../util/linkCodec";
import { BigNumber, ethers } from "ethers";
import { ERC20, ERC20__factory } from "../../contracts";
import { WISP_CONTRACT } from "../../util/contracts";

const PaymentOneTime = () => {
  const router = useRouter();
  const id = router.query.id;

  const { account, web3Provider } = useContext(AuthContext);

  const [error, setError] = useState<string>("");

  const { chevronIcon, textColor, inputColor } = useColor();
  const [balance, setBalance] = useState<string | undefined>();
  const [requestedAmount, setRequestedAmount] = useState<string | undefined>();
  const [requestedToken, setRequestedToken] = useState<Token | undefined>();
  const [tokenContract, setTokenContract] = useState<ERC20 | undefined>();
  const [needsApproval, setNeedsApproval] = useState<boolean>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const linkCodec = LinkCodec.decode(id as string);
    setRequestedAmount(ethers.utils.formatEther(BigNumber.from(linkCodec.amount)));
    setRequestedToken(tokens.find(it => it.address === linkCodec.token));
  }, [id]);

  useEffect(() => {
    if (!requestedToken || !web3Provider) {
      return;
    }

    const tokenContract = ERC20__factory.connect(requestedToken.address, web3Provider.getSigner(0));
    setTokenContract(tokenContract);

    tokenContract.balanceOf(account)
      .then(balance => setBalance(ethers.utils.formatEther(balance)))
      .catch(console.log);
  }, [requestedToken, account, web3Provider]);

  useEffect(() => {
    if (!tokenContract || !requestedAmount) {
      return;
    }

    tokenContract.allowance(account, WISP_CONTRACT)
      .then(allowance => setNeedsApproval(ethers.utils.parseEther(requestedAmount).gt(allowance)))
      .catch(console.log);
  }, [tokenContract, account, requestedAmount]);

  const approvePayment = async () => {
    if (!tokenContract || !requestedAmount) {
      return;
    }

    // todo: add spinner for transaction confirmations
    const transaction = await tokenContract.approve(WISP_CONTRACT, ethers.utils.parseEther(requestedAmount));
    await transaction.wait(1);
  }

  const executePayment = async () => {
    console.log("Execute payment");
  };

  return (
    <Box>
      <Text color={textColor} textStyle="app_med_18" textAlign="center">
        Payment
      </Text>
      <Text color={textColor} textStyle="app_reg_14" textAlign="center">
        has been requested
      </Text>
      <Box borderRadius="6px" backgroundColor={inputColor} p="16px" mt="16px">
        <Text color={textColor} textStyle="app_reg_12" textAlign="center">
          Your balance: {balance} {requestedToken?.symbol}
        </Text>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Image
              src={`/icons/${requestedToken?.symbol.toLowerCase()}_logo.svg`}
              alt="Token Logo"
              width="32px"
              height="32px"
            />
          </Box>
          <Box ml="8px">
            <Text color={textColor} textStyle="app_reg_32">{requestedAmount} {requestedToken?.symbol}</Text>
          </Box>
        </Box>
        <Box mt="4px" textAlign="center">
          <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
            ~ 0 USD
          </Text>
        </Box>
      </Box>
      {error && <Text mt="12px" color={"red"} textStyle="app_reg_14" textAlign="center">
        {`You don't have enough token on your account`}
      </Text>}

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
        onClick={needsApproval ? approvePayment : executePayment}
      >
        {needsApproval ? "Approve Payment" : "Pay"}
      </Box>
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

        <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
          ~ 0 USD
        </Text>
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

const WalletRequest = () => {
  const { account, connectWallet, disconnect, isWalletLoading } = useContext(AuthContext);

  const { textColor } = useColor();


  return (
    <>
      <Box>
        <Text color={textColor} textStyle="app_med_18" textAlign="center">
          Connect your wallet to pay
        </Text>
      </Box>
      <Box mt="12px">
        <Text
          color="neutral.500"
          textStyle="app_reg_12"
          textAlign="center"
        >{`By connecting your wallet, you agree to Wisp's Terms, Privacy Policy, and Community Standards.`}</Text>
      </Box>
      <Box mt="32px" textAlign="center">
        <Wallet
          account={account}
          connectWallet={connectWallet}
          disconnect={disconnect}
          isLoading={isWalletLoading}
          ml="0"
        />
      </Box>
      <Box mt="32px" textAlign="center">
        <Text color={textColor} textStyle="app_reg_14">
          New to crypto?
          <Text as="span" ml="5px" color="primary.700">
            Learn more about wallets.
          </Text>
        </Text>
      </Box>
    </>
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
            <Image src={logoMd} alt="logo"/>
          </Box>
          <Box
            p="24px"
            width="400px"
            backgroundColor={blockColor}
            borderRadius="6px"
            mt="32px"
          >
            {!account ?
              <WalletRequest/>
              : <PaymentOneTime/>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Request;
