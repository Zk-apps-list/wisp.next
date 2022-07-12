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
import { GET_PAYMENTS_QUERY } from "../util/thegraph";

const TransactionsPage = () => {

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
      backgroundColor="light_neutral.50"
    >
      <Navbar
        isMobileOnly
        title="Transactions"
        menuItems={PortfolioMenuItems}
      />
      <Box backgroundColor="light_neutral.50" width="100%" display="flex">
        <Box>
          <LeftPanel/>
        </Box>
        <Box width="100%">
          <Box display={{ base: "none", md: "inline" }} width="100%">
            <Header/>
          </Box>
          <Box mt={{ base: "104px", md: "0px" }} mx="32px" textAlign="right">
            <CTAButton
              name="Export"
              icon="/icons/arrow_down.svg"
              onClick={() => console.log('Export')}
            />
          </Box>
          <Box width="100%" mt="16px">
            <Box width={{ base: "100%" }}>
              {
                data && personalKeypair && sharedKeypair &&
                <TransactionTable personalKeypair={personalKeypair} sharedKeypair={sharedKeypair} data={data}/>
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default TransactionsPage;
