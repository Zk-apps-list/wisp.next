import { Box, Image, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import { useColor } from "../hooks/useColor";
import TransactionTable from '../components/Transactions/Transactions';
import Navbar from "../components/Navbar";
import { MenuItem } from './index';
import CTAButton from "../components/CTAButton";

const TransactionsPage = () => {
  const { overviewBG, homeIcon, settingsIcon } = useColor();

  const MenuItems: MenuItem[] = [
    {
      name: 'Overview',
      href: '/overview',
      icon: homeIcon
    },
    {
      name: 'Transactions',
      href: '/transactions',
      icon: settingsIcon
    }
  ]

  return (
    <Flex
      align="center"
      direction="column"
      backgroundColor={overviewBG}
    >
      <Navbar
        isMobileOnly
        title="Transactions"
        menuItems={MenuItems}
      />
      <Box backgroundColor={overviewBG} width="100%" display="flex">
        <Box>
          <LeftPanel />
        </Box>
        <Box width="100%">
          <Box display={{ base: "none", md: "inline"}} width="100%">
            <Header />
          </Box>
          <Box mx="32px" textAlign="right">
            <CTAButton
              name="Export"
              icon="/icons/arrow_down.svg"
              onClick={() => console.log('Export')}
            />
          </Box>
          <Box width="100%" mt="16px">
            <Box width={{base:"100%"}} mt={{ base: "100px", md: "0px" }}>
              <TransactionTable />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default TransactionsPage;
