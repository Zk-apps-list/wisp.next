import { Box, Flex, Image, Text, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import LeftPanel from "../LeftPanel";
import Navbar from "../Navbar";
import { MenuItem } from "../../pages";
import Request from "../Request";
import Token from "../Token";
import CTAButton from "../CTAButton";
import DepositModal from "../Modal/DepositModal";
import WithdrawModal from "../Modal/WithdrawModal";
import TransferModal from "../Modal/TransferModal";
import TransactionPendingModal from "../Modal/TransactionPendingModal";
import TransactionIcon from "../Icons/TransactionIcon";
import WalletIcon from "../Icons/WalletIcon";
import { Keypair } from "../../util/keypair";
import { useQuery } from "@apollo/client";
import { GET_PAYMENTS_QUERY, GetPaymentsResult, Payment } from "../../util/thegraph";
import { parseNoteFromBuff } from "../../util/note";
import { decryptData } from "../../util/encryption";
import { tokens } from "../../util/tokens";
import { BigNumber, ethers } from "ethers";

const ProgressBar = (props: any) => {
  const { percent } = props;

  return (
    <Flex>
      <Box textStyle="app_med_14" color="neutral.400">{`${percent}%`}</Box>
      <Flex alignItems="center">
        <Box ml="8px" height="4px" width="100px" borderRadius="10px" backgroundColor="neutral.100">
          <Box
            position="relative"
            left="0px"
            height="4px"
            width={`${percent}%`}
            overflow="hidden"
            borderRadius="10px"
            backgroundColor="primary.700"
          />
        </Box>
      </Flex>
    </Flex>
  )
}

type PortfolioTableProps = {
  personalKeypair: Keypair,
  sharedKeypair: Keypair,
  data: GetPaymentsResult,
}

const PortfolioTable = (props: PortfolioTableProps) => {

  const tableData: { [tokenAddress: string]: { logo: string, name: string, amount: BigNumber } } = {};
  props.data.payments.forEach((p: Payment) => {
    let privateKey: string;
    if (p.publicKey === props.personalKeypair.publicKey) {
      privateKey = props.personalKeypair.privateKey!;
    } else if (p.publicKey === props.sharedKeypair.publicKey) {
      privateKey = props.sharedKeypair.privateKey!;
    } else {
      return;
    }

    const decryptedNote = parseNoteFromBuff(decryptData(privateKey.slice(2), p.encryptedData))
    const token = tokens.find(it => it.address === decryptedNote.token);
    if (!token) {
      return;
    }

    if (!tableData[token.address]) {
      tableData[token.address] = {
        logo: token.icon,
        name: `${token.name} (${token.symbol})`,
        amount: decryptedNote.amount
      };
    } else {
      tableData[token.address].amount = tableData[token.address].amount.add(decryptedNote.amount);
    }
  });

  return (
    <Box mt="24px" p="16px" mx="32px" backgroundColor="neutral.0" borderRadius="12px"
         box-shadow="0px 10px 6px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)">
      <Box>
        <Text color="neutral.900" textStyle="app_semibold_16">Your Holdings</Text>
      </Box>

      <Box mt="16px">
        <Box display="table" width="100%">

          <Box borderRadius="6px" display="table-row" color="neutral.600" textStyle="app_reg_14"
               backgroundColor="neutral.50">
            <Box display="table-cell" width="20%" p="6px" pl="12px">
              Asset
            </Box>
            <Box display="table-cell" width="20%" p="6px">
              Amount
            </Box>
            <Box display="table-cell" width="20%" p="6px">
              Value
            </Box>
            <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="20%" p="6px">
              % Change
            </Box>
            <Box display={{ base: "none", md: "none", lg: "table-cell" }} width="20%" p="6px" pr="12px">
              Portfolio Amount
            </Box>
          </Box>
          <Box mt="10px"/>

          {Object.keys(tableData).map(tokenAddress => {
            return (
              <PortfolioTableRow
                key={tokenAddress}
                logo={tableData[tokenAddress].logo}
                name={tableData[tokenAddress].name}
                amount={ethers.utils.formatEther(tableData[tokenAddress].amount)}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  )
};

type PortfolioTableRowProps = {
  logo: string,
  name: string,
  amount: string
}

const PortfolioTableRow = (props: PortfolioTableRowProps) => {
  return (
    <Box display="table-row">
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Box position="relative" top="10px" ml="12px">
          <Token source={props.logo} name={props.name}/>
        </Box>
      </Box>
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">{props.amount}</Text>
      </Box>
      <Box display="table-cell" py="8px" borderBottomWidth="1px" borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">11,054.09 USD</Text>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px"
           borderBottomColor="neutral.100">
        <Text textStyle="app_med_14" color="neutral.800">+2% ($ 435)</Text>
      </Box>
      <Box display={{ base: "none", md: "none", lg: "table-cell" }} py="8px" borderBottomWidth="1px"
           borderBottomColor="neutral.100">
        <ProgressBar percent="45"/>
      </Box>
    </Box>
  )
};

export const PortfolioMenuItems: MenuItem[] = [
  {
    name: "Portfolio",
    path: "/",
    icon: (color) => <WalletIcon color={color} boxSize="28px" />
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: (color) => <TransactionIcon color={color} boxSize="28px" />
  }
];

const PortfolioPage = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);
  const [account, setAccount] = useState<string>("");
  const [personalKeypair, setPersonalKeypair] = useState<Keypair | undefined>();
  const [sharedKeypair, setSharedKeypair] = useState<Keypair | undefined>();

  const { loading, error, data } = useQuery(GET_PAYMENTS_QUERY, {
    variables: {
      publicKeys: [personalKeypair?.publicKey, sharedKeypair?.publicKey]
    },
  });

  useEffect(() => {
    const account = localStorage.getItem("account") as string;
    const personalKeypair = JSON.parse(localStorage.getItem("personalKeypair") || "") as Keypair;
    const sharedKeypair = JSON.parse(localStorage.getItem("sharedKeypair") || "") as Keypair;

    setAccount(account);
    setPersonalKeypair(personalKeypair);
    setSharedKeypair(sharedKeypair);
  }, []);

  return (
    <Flex
      align="center"
      direction="column"
      backgroundColor="primary.0"
    >
      <Navbar
        isMobileOnly
        title="Portfolio"
        menuItems={PortfolioMenuItems}
      />
      <TransactionPendingModal />
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setDepositModalOpen(false)}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
      />
      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={() => setTransferModalOpen(false)}
      />
      <Box backgroundColor="primary.0" width="100%" display="flex">
        <Box>
          <LeftPanel/>
        </Box>
        <Box width="100%">
          <Box display={{ base: "none", md: "inline" }}>
            <Header/>
          </Box>
          <Box
            mt={{ base: "104px", md: "0px" }}
            p="16px"
            mx="32px"
            backgroundColor="neutral.0"
            borderRadius="12px"
            box-shadow="0px 10px 6px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)"
            display={{ base: "block", lg: "flex" }}
          >
            <Flex direction="column" flexGrow={7} flexBasis="280px">
              <Text color="neutral.600" textStyle="app_reg_12" textAlign={{ base: "center", lg: "left" }}>Total
                Value</Text>
              <Box mt="3px" columnGap="8px" display={{ base: "block", lg: "flex" }}>
                <Text textStyle="app_semibold_24" lineHeight="30px" textAlign="center">$9,000,112,453.00</Text>
                <Flex justifyContent="center">
                  <Flex justifyContent="center" alignItems="center">
                    <Image
                      src="icons/increase.svg"
                      alt="Increase Icon"
                      width="22px"
                      height="22px"
                    />
                  </Flex>
                  <Text textStyle="app_med_14" color="green.dark" lineHeight="30px" ml="6px">7D +5% ($400)</Text>
                </Flex>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flex={1} mt={{ base: "8px", lg: "0px" }}
                  columnGap={{ base: "24px", md: "12px" }}>
              <Box>
                <CTAButton
                  name="Deposit"
                  icon="/icons/plus.svg"
                  responsive
                  onClick={() => setDepositModalOpen(true)}
                />
              </Box>
              <Box>
                <CTAButton
                  name="Withdraw"
                  icon="/icons/arrow_down.svg"
                  responsive
                  onClick={() => setWithdrawModalOpen(true)}
                />
              </Box>
              <Box>
                <Request/>
              </Box>
              <Box>
                <CTAButton
                  name="Transfer"
                  icon="/icons/arrow_right.svg"
                  responsive
                  onClick={() => setTransferModalOpen(true)}
                />
              </Box>
            </Flex>
          </Box>
          {
            data && personalKeypair && sharedKeypair &&
            <PortfolioTable personalKeypair={personalKeypair} sharedKeypair={sharedKeypair} data={data}/>
          }
        </Box>
      </Box>
    </Flex>
  );
};

export default PortfolioPage;
