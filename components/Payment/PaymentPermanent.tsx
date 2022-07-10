import { Box, Button, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Token, tokens } from "../../util/tokens";
import { BigNumber, ethers } from "ethers";
import { ERC20__factory, Wisp__factory } from "../../contracts";
import { WISP_CONTRACT } from "../../util/contracts";
import { getDepositData } from "../../util/deposit";
import { Keypair } from "../../util/keypair";

type Props = { id: string }

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

export default PaymentPermanent;