import {
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Token from "../Token";

enum BadgeType {
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
  FAILED = "FAILED"
}

const Badge = (props: any) => {
  const type: BadgeType = props.type;

  switch(type) {
    case "RECEIVED":
      return (
        <Box
          display="inline"
          color="green"
          textStyle="app_med_12"
          px="8px"
          py="4px"
          borderRadius="4px"
          backgroundColor="light_green"
        >
          RECEIVED
        </Box>
      )
    case "PENDING":
      return (
        <Box
          display="inline"
          color="red"
          textStyle="app_med_12"
          px="8px"
          py="4px"
          borderRadius="4px"
          backgroundColor="neutral"
        >
          PENDING
        </Box>
      )
    case "FAILED": default:
      return (
        <Box
          display="inline"
          color="red"
          textStyle="app_med_12"
          px="8px"
          py="4px"
          borderRadius="4px"
          backgroundColor="neutral.0"
        >
          FAILED
        </Box>
      )
  }
};

const TransactionTable = () => {
  return (
    <Box p="16px" mx="32px" backgroundColor="neutral.0" borderRadius="12px" box-shadow= "0px 10px 6px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)">
      <Box display="table" width="100%">

        <Box borderRadius="6px" display="table-row" color="neutral.600" textStyle="app_reg_14" backgroundColor="neutral.50">
          <Box display="table-cell" width="16.7%" p="6px" pl="12px">
            Token
          </Box>
          <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="16.7%" p="6px">
            Transaction ID
          </Box>
          <Box display="table-cell" width="16.7%" p="6px">
            Status
          </Box>
          <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="16.7%" p="6px">
            Amount
          </Box>
          <Box display="table-cell" width="16.7%" p="6px">
            Value
          </Box>
          <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="16.7%" p="6px" pr="12px">
            Date
          </Box>
        </Box>
        <Box mt="10px" />
        
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />

      </Box>
    </Box>
  )
};

const TransactionRow = () => {
  return (
    <Box display="table-row">
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Box position="relative" top="10px" ml="12px">
          <Token source="icons/uni_logo.svg" name="Ethereum (USDC)" />
        </Box>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">fojaf2...fjdiwa</Text>
      </Box>
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Badge type={BadgeType.RECEIVED} />
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">8.423 USDC</Text>
      </Box>
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">132 USD</Text>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">15/05/2022 3:25 PM</Text>
      </Box>
    </Box>
  )
};

export default TransactionTable;