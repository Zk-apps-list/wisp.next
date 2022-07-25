import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import TransactionTable from '../components/Transactions/Transactions';
import Navbar from "../components/Navbar";
import CTAButton from "../components/CTAButton";
import { PortfolioMenuItems } from "../components/Portfolio/Portfolio";
import { Keypair } from "../util/keypair";
import { useQuery } from "@apollo/client";
import { GET_PAYMENTS_QUERY, Payment } from "../util/thegraph";
import axios from "axios";
import { parseNoteFromBuff } from "../util/note";
import { tokens } from "../util/tokens";
import { decryptData } from "../util/encryption";
import { ethers } from "ethers";

export type TableData = RowData[];
interface RowData {
  id: string,
  logo: string,
  name: string,
  txHash: string,
  amount: string,
  date: string
}

const TransactionsPage = () => {
  const [account, setAccount] = useState<string>("");
  const [personalKeypair, setPersonalKeypair] = useState<Keypair | undefined>();
  const [sharedKeypair, setSharedKeypair] = useState<Keypair | undefined>();
  const [isExporting, setIsExporting] = useState<boolean>(false);

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

  const tableData: TableData = data?.payments.map((p: Payment) => {
    let privateKey: string;
    if (p.publicKey === personalKeypair?.publicKey) {
      privateKey = personalKeypair?.privateKey || "";
    } else if (p.publicKey === sharedKeypair?.publicKey) {
      privateKey = sharedKeypair?.privateKey || "";
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

  const exportPdf = async () => {
    setIsExporting(true);
    try {
      const response = await axios({
        url: '/api/transactions',
        method: 'POST',
        responseType: 'blob',
        data: tableData
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'transactions.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.warn(err);
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <Flex
      align="center"
      direction="column"
      backgroundColor="neutral.50"
    >
      <Navbar
        isMobileOnly
        title="Transactions"
        menuItems={PortfolioMenuItems}
      />
      <Box backgroundColor="neutral.50" width="100%" display="flex">
        <Box>
          <LeftPanel/>
        </Box>
        <Box width="100%">
          <Box display={{ base: "none", md: "inline" }} width="100%">
            <Header/>
          </Box>
          {!loading && (
            <>
              <Box mt={{ base: "104px", md: "0px" }} mx="32px" textAlign="right">
                <CTAButton
                  name="Export"
                  icon="/icons/arrow_down.svg"
                  isLoading={isExporting}
                  onClick={exportPdf}
                />
              </Box>
              <Box width="100%" mt="16px">
                <Box width={{ base: "100%" }}>
                  {
                    data && personalKeypair && sharedKeypair &&
                    <TransactionTable tableData={tableData}/>
                  }
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default TransactionsPage;
