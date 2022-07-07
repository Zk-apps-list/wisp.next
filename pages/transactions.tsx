import { Box, Image, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import TransactionTable from '../components/Transactions/Transactions';
import Navbar from "../components/Navbar";
import CTAButton from "../components/CTAButton";
import { PortfolioMenuItems } from "../components/Portfolio/Portfolio";

const TransactionsPage = () => {
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
          <LeftPanel />
        </Box>
        <Box width="100%">
          <Box display={{ base: "none", md: "inline"}} width="100%">
            <Header />
          </Box>
          <Box mt={{ base: "104px", md: "0px" }} mx="32px" textAlign="right">
            <CTAButton
              name="Export"
              icon="/icons/arrow_down.svg"
              onClick={() => console.log('Export')}
            />
          </Box>
          <Box width="100%" mt="16px">
            <Box width={{base:"100%"}}>
              <TransactionTable />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default TransactionsPage;
