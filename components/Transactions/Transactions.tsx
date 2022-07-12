import { Box, Text, } from "@chakra-ui/react";
import React from "react";
import Token from "../Token";
import { decryptData } from "../../util/encryption";
import { Keypair } from "../../util/keypair";
import { parseNoteFromBuff } from "../../util/note";
import { tokens } from "../../util/tokens";
import { ethers } from "ethers";
import { GetPaymentsResult, Payment } from "../../util/thegraph";

enum BadgeType {
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
  FAILED = "FAILED"
}

const Badge = (props: any) => {
  const type: BadgeType = props.type;

  switch (type) {
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
    case "FAILED":
    default:
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

type TransactionTableProps = {
  personalKeypair: Keypair,
  sharedKeypair: Keypair,
  data: GetPaymentsResult,
}

const TransactionTable = (props: TransactionTableProps) => {

  const tableData = props.data.payments.map((p: Payment) => {
    let privateKey: string;
    if (p.publicKey === props.personalKeypair.publicKey) {
      privateKey = props.personalKeypair.privateKey || "";
    } else if (p.publicKey === props.sharedKeypair.publicKey) {
      privateKey = props.sharedKeypair.privateKey || "";
    } else {
      return null;
    }

    const decryptedNote = parseNoteFromBuff(decryptData(privateKey.slice(2), p.encryptedData))
    const token = tokens.find(it => it.address === decryptedNote.token);

    return {
      id: p.id,
      logo: token?.icon,
      name: `${token?.name} (${token?.symbol})`,
      txHash: p.txHash,
      amount: ethers.utils.formatEther(decryptedNote.amount),
      date: new Date(parseInt(p.blockTimestamp) * 1000)
    }
  })

  return (
    <Box p="16px" mx="32px" backgroundColor="neutral.0" borderRadius="12px"
         box-shadow="0px 10px 6px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)">
      <Box display="table" width="100%">

        <Box borderRadius="6px" display="table-row" color="neutral.600" textStyle="app_reg_14"
             backgroundColor="neutral.50">
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
          <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="16.7%" p="6px" pr="12px">
            Date
          </Box>
        </Box>
        <Box mt="10px"/>
        {
          tableData.map((it: any) => {
            return (
              <TransactionRow
                key={it.id}
                logo={it.logo}
                name={it.name}
                txHash={it.txHash}
                amount={it.amount}
                date={it.date}
              />);
          })
        }
      </Box>
    </Box>
  )
};

type TransactionRowProps = {
  logo: string,
  name: string,
  txHash: string,
  amount: string
  date: Date
}

const TransactionRow = (props: TransactionRowProps) => {
  return (
    <Box display="table-row">
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Box position="relative" top="10px" ml="12px">
          <Token source={props.logo} name={props.name}/>
        </Box>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px"
           borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">{props.txHash}</Text>
      </Box>
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Badge type={BadgeType.RECEIVED}/>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px"
           borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">{props.amount}</Text>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px"
           borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">{props.date.toISOString()}</Text>
      </Box>
    </Box>
  )
};

export default TransactionTable;