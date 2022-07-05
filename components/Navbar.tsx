import { Flex, Text, Image, Link, Button, Box, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MenuItem } from '../pages';
import { truncateWallet } from '../util/truncateWallet';
import ClaimIDModal from './Modal/ClaimIDModal/ClaimIDModal';
import Wallet from './Wallet';

const Navbar = (props: any) => {
  const router = useRouter();
  const pathname = router.pathname;

  const { account, connectWallet, disconnect, isWalletLoading } = useContext(AuthContext);
  const { menuItems, isMobileOnly, title} = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(menuItems[0]);

  const [isClaimIDModalOpen, setClaimIDModalOpen] = useState(false);

  const contentWidths = {
    base: "calc(100% - 64px)",
    lg: "1008px"
  };

  return (
    <>
      <ClaimIDModal
        isOpen={isClaimIDModalOpen}
        onClose={() => setClaimIDModalOpen(false)}
      />
      <Flex
        width={contentWidths}
        height={58}
        backgroundColor="primary.500"
        borderRadius="6px"
        align="center"
        justify="space-between"
        mt="24px"
        py="12px"
        px="32px"
        position="fixed"
        zIndex={1}
        display={isMobileOnly ? { base: "flex", md: "none" } : "flex"}
      >
        <Image
          src="/icons/logo-md-light.svg"
          alt="Wisp Logo"
          display={{ base: "none", md: "block" }}
          width="70px"
          mr="55px"
        />
        <Image
          src="/icons/logo-sm-light.svg"
          alt="Wisp Logo"
          display={{ base: "block", md: "none" }}
        />
        <Text
          textStyle="app_med_18"
          display={{ base: "block", md: "none" }}
          color="neutral.0"
        >
          {title}
        </Text>
        <Flex align="center" flex="1" display={{ base: "none", md: "flex" }}>
          {menuItems.map((el: MenuItem, index: number) => {
            return (
              <Link
                key={index}
                href={el.href}
                textStyle="land_reg_14"
                color={menu === el.name ? "light_neutral.800" : "light_neutral.800"}
                mr="24px"
                _hover={{ textDecoration: "none" }}
                onClick={() => setMenu(el.name)}
              >
                {el.name}
              </Link>
            )
          })}
          <Wallet
            account={account}
            connectWallet={connectWallet}
            disconnect={disconnect}
            isLoading={isWalletLoading}
          />
        </Flex>
        <Button
          backgroundColor="transparent"
          w="36px"
          h="36px"
          p="0"
          display={{ base: "block", md: "none" }}
          _hover={{ bg: "primary.900" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            w="20px"
            h="20px"
            mx="auto"
            src="/icons/hamburger-icon.svg"
            alt="Hamburger menu"
          />
        </Button>
      </Flex>
      {menuOpen && (
        <Flex
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
          background="linear-gradient(152.47deg, #385CD9 42.36%, #147BDA 73.79%);"
          direction="column"
          py="24px"
          align="center"
          zIndex={1}
        >
          <Flex
            width={contentWidths}
            height={58}
            backgroundColor="transparent"
            borderRadius="6px"
            align="center"
            justify="space-between"
            py="12px"
            px="32px"
          >
            <Image
              src="/icons/logo-sm-light.svg"
              alt="Wisp Logo"
              display={{ base: "block", md: "none" }}
            />
            <Text
              textStyle="app_med_18"
              display={{ base: "block", md: "none" }}
              color="neutral.0"
            >
              {account ? truncateWallet(account, 6) : null}
            </Text>
            <Button
              backgroundColor="neutral.0"
              w="36px"
              h="36px"
              p="0"
              display={{ base: "block", md: "none" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                w="20px"
                h="20px"
                mx="auto"
                src="/icons/close-icon.svg"
                alt="Hamburger icon"
              />
            </Button>
          </Flex>
          <Flex direction="column" width={contentWidths} gap="12px">
            <Box width="100%" borderBottomWidth="1px" color="primary.400" opacity={0.2} />
            {/* TODO: Make menu dynamic */}
            {/* {menuItems.map((el: MenuItem, index: number) => {
              return (
                <Link
                  key={index}
                  textStyle="app_reg_14"
                  color="light_neutral.800"
                  backgroundColor="neutral.0"
                  borderRadius="6px"
                  w="100%"
                  p="15px"
                  href={el.href}
                >
                  <Flex align="center">
                    <Image
                      src={el.icon}
                      mr="12px"
                      alt="Home icon"
                    />
                    {el.name}
                  </Flex>
                </Link>
              )
            })} */}
            <Box
              display="flex"
              flexDirection="column"
            >
              <Flex direction="column" mt="8px">
                <Box
                  as={Button}
                  borderRadius="6px"
                  py="24px"
                  textAlign="center"
                  leftIcon={
                    <Image
                    src={
                      pathname === "/"
                        ? "icons/wallet.svg"
                        : "icons/wallet-light.svg"
                    }
                      alt="Portfolio Icon"
                      width="28px"
                      height="28px"
                    />
                  }
                  backgroundColor={pathname === "/" ? "neutral.0" : "transparent"}
                  _hover={{ bg: pathname === "/" ? "neutral.0" : "primary.900" }}
                  onClick={() => router.push(`/`)}
                >
                  <Text mr="auto" ml="16px" color={pathname === "/" ? "primary.700" : "neutral.0"} textStyle="app_reg_14">
                    Portfolio
                  </Text>
                </Box>

                <Box
                  as={Button}
                  borderRadius="6px"
                  mt="12px"
                  py="24px"
                  textAlign="center"
                  leftIcon={
                    <Image
                      src={
                        pathname === "/transactions"
                          ? "icons/transactions.svg"
                          : "icons/transactions-light.svg"
                      }
                      alt="Transactions Icon"
                      width="28px"
                      height="28px"
                    />
                  }
                  backgroundColor={pathname === "/transactions" ? "neutral.0" : "transparent"}
                  _hover={{ bg: pathname === "/transactions" ? "neutral.0" : "primary.900" }}
                  onClick={() => router.push(`/transactions`)}
                >
                  <Text mr="auto" ml="16px" color={pathname === "/transactions" ? "primary.700" : "neutral.0"} textStyle="app_reg_14">
                    Transactions
                  </Text>
                </Box>

                <Box
                  as={Button}
                  borderRadius="6px"
                  mt="12px"
                  py="24px"
                  textAlign="center"
                  leftIcon={
                    <Image
                      src="/icons/leave.svg"
                      alt="Transactions Icon"
                      width="28px"
                      height="28px"
                    />
                  }
                  backgroundColor="transparent"
                  _hover={{ bg: "primary.900" }}
                  onClick={() => disconnect()}
                >
                  <Text mr="auto" ml="16px" color="neutral.0" textStyle="app_reg_14">
                    Log out
                  </Text>
                </Box>

                <Box my="24px" borderBottomWidth="1px" color="primary.400" opacity={0.2} />

                <Box>
                  <Flex justifyContent="space-between">
                    <Flex textStyle="app_med_14" color="neutral.0" justifyContent="center" alignItems="center">Your ID</Flex>
                    <Tooltip
                      label="Your URL ID can be used to receive payments privately."
                      placement="top"
                      width="200px"
                      p="12px"
                      borderRadius="12px"
                      textStyle="app_med_10"
                      backgroundColor="neutral.900"
                      color="neutral.0"
                    >
                      <Flex
                        textStyle="app_med_14"
                        color="neutral.0"
                        alignItems="center"
                        cursor="default"
                      >What is this?</Flex>
                    </Tooltip>
                  </Flex>
                  <Flex
                    as={Button}
                    mt="12px"
                    width="100%"
                    p="8px"
                    borderRadius="8px"
                    borderWidth="1px"
                    borderColor="primary.300"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="transparent"
                    _hover={{ bg: "primary.900", borderColor: "transparent" }}
                    onClick={() => setClaimIDModalOpen(true)}
                  >
                    <Text textStyle="app_med_14" color="neutral.0">Claim ID</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            {/* <Link
              textStyle="app_reg_14"
              color="light_neutral.800"
              backgroundColor="primary.700"
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              <Flex align="center">
                <Image src="icons/rocket-icon.svg" mr="12px" />
                <Wallet
                  ml="0px"
                  account={account}
                  connectWallet={connectWallet}
                  disconnect={disconnect}
                  isLoading={isWalletLoading}
                />
              </Flex>
            </Link> */}
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default Navbar;