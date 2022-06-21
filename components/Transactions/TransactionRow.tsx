import React from 'react';
import {
  Box,
  Image,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useColor } from '../../hooks/useColor';
import { truncateWallet } from '../../util/truncateWallet';

const TransactionRow = (props: any) => {
  const { token, transactionId, status, amount, value, date } = props;
  const { textColor } = useColor();

  const tokenToLogo = () => {
    switch (token) {
      case "ETH":
        return "icons/eth_logo.svg";
      case "USDC":
        return "icons/usdc_logo.svg";
      case "UNI":
      default:
        return "icons/uniswap_logo.svg";
    }
  };

  const tokenToText = () => {
    switch (token) {
      case "ETH":
        return "Ethereum (ETH)";
      case "USDC":
        return "USD Coin (USDC)";
      case "UNI":
      default:
        return "Uniswap (UNI)";
    }
  };

  return (
    <Tr>
      <Td>
        <Box flexDirection="row" display="flex">
          <Box>
            <Image
              src={tokenToLogo()}
              alt="Ethereum Logo"
              width="24px"
              height="24px"
            />
          </Box>
          <Text color={textColor} textStyle="app_reg_14" ml="8px" mt="2px">
            {tokenToText()}
          </Text>
        </Box>
      </Td>

      <Td color={textColor} textStyle="app_reg_14">
        {truncateWallet(transactionId, 15)}
      </Td>

      <Td color={textColor} textStyle="app_reg_14">
        {status}
      </Td>

      <Td color={textColor} textStyle="app_reg_14">
        {amount}
      </Td>

      <Td color={textColor} textStyle="app_reg_14" isNumeric>
        {value}
      </Td>

      <Td color={textColor} textStyle="app_reg_14" isNumeric>
        {date}
      </Td>
    </Tr>
  );
};

export default TransactionRow;