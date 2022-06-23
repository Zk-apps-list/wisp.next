import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { truncateWallet } from "../util/truncateWallet";
import { useRouter } from "next/router";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import { useColor } from "../hooks/useColor";
import TransactionsTable from "../components/Transactions/TransactionsTable";
import Navbar from "../components/Navbar";
import { MenuItem } from "../pages";
import { Token, tokens } from "../util/tokens";
import CreateALink from "../components/CreateALink";
import Dashboard from "../components/Dashboard";

const WithdrawButton = (props: any) => {
  return (
    <Box
      as={Button}
      backgroundColor={"primary.800"}
      borderRadius="6px"
      py="12px"
      width="110px"
      textAlign="center"
      _hover={{ bg: "primary.700" }}
      ml="12px"
      leftIcon={
        <Image
          src="icons/arrow_down.svg"
          alt="Ethereum Logo"
          width="16px"
          height="16px"
        />
      }
    >
      <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
        Withdraw
      </Text>
    </Box>
  )
}


const OverviewPage = () => {
  const { overviewBG, homeIcon, settingsIcon, textColor } = useColor();

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
        title="Overview"
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
          <Box width="100%">
            <Box display={{base: "block", md: "flex"}}  mt={{ base: "100px", md: "0px" }}>
              <Box display={{base: "block", md: "flex"}} ml={{base: "auto", md: "24px"}} mr={{base: "auto", md: "12px"}} minWidth="300px" flexDirection="column">
                <Box color="neutral.400" textStyle="app_reg_14" textAlign={{base: "center", md: "left"}}>
                  Total Value
                </Box>

                <Box display="flex" flexDirection={{base: "column", md: "row"}} >
                  <Box color={textColor} textStyle="app_reg_32"  textAlign={{base: "center", md: "left"}}>
                    $12,453.00
                  </Box>

                  <Box display={{base: "flex", md: "block"}} textAlign={{base: "center", md: "left"}} justifyContent="center" ml={{base: "0px", md: "12px"}}>
                    <Text color="green" textStyle="app_reg_14">
                      + $435 Value
                    </Text>
                    <Text color="green" textStyle="app_reg_14">
                      + 5.00% APY
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
                <Box mr="24px">
                  <WithdrawButton />
                </Box>
                {tokens.slice(0,2).map((el: Token, index: number) => {
                  return (
                    <Box key={index} display="flex" flexDirection="row" mr="24px" mt="2px">
                      <Box>
                        <Image
                          src={el.icon}
                          alt="Ethereum Logo"
                          width="36px"
                          height="36px"
                        />
                      </Box>
                      <Text
                        color={textColor}
                        textStyle="app_reg_16"
                        ml="8px"
                        mt="5px"
                      >
                        {el.symbol} 4.24
                      </Text>
                    </Box>
                  )
                })}
              </Flex>

              <Box mt="24px" display={{base: "flex", md: "none"}} justifyContent="center">
                <CreateALink />
                <WithdrawButton />
              </Box>

            </Box>

            <Box width="70%" maxWidth="700px" ml="auto" mr="auto">
              <Dashboard />
            </Box>
            <Box width={{base:"100%", md: "90%"}}>
              <TransactionsTable showTitle />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default OverviewPage;
