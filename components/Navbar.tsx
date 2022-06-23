import { Flex, Text, Image, Link, Button, useColorMode } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useColor } from '../hooks/useColor';
import { MenuItem } from '../pages';
import Wallet from './Wallet';

const Navbar = (props: any) => {
  const { account, connectWallet, disconnect, isWalletLoading } = useContext(AuthContext);
  const { menuItems, isMobileOnly, title} = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(menuItems[0]);
  const { toggleColorMode } = useColorMode();

  const {
    landingBG,
    contrastText,
    selectedMenuText,
    blocks,
    logoMd,
    logoSm,
    lightToggle,
    buttonBg,
    hamburgerIcon
  } = useColor();

  const contentWidths = {
    base: "343px",
    sm: "544px",
    md: "768px",
    lg: "1008px",
    xl: "1088px",
    xxl: "1088px",
  };

  return (
    <>
      <Flex
        width={contentWidths}
        height={58}
        backgroundColor={blocks}
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
          src={logoMd}
          alt="Wisp Logo"
          display={{ base: "none", md: "block" }}
          width="70px"
          mr="55px"
        />
        <Image
          src={logoSm}
          alt="Wisp Logo"
          display={{ base: "block", md: "none" }}
        />
        <Text
          textStyle="app_med_18"
          display={{ base: "block", md: "none" }}
          color={contrastText}
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
                color={menu === el.name ? contrastText : selectedMenuText}
                mr="24px"
                _hover={{ textDecoration: "none" }}
                onClick={() => setMenu(el.name)}
              >
                {el.name}
              </Link>
            )
          })}
          <Button
            onClick={toggleColorMode}
            ml="auto"
            background="none"
            variant="link"
          >
            <Image src={lightToggle} alt="Light toogle"/>
          </Button>
          <Wallet
            account={account}
            connectWallet={connectWallet}
            disconnect={disconnect}
            isLoading={isWalletLoading}
          />
        </Flex>
        <Button
          backgroundColor={buttonBg}
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
            src={hamburgerIcon}
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
          backgroundColor={landingBG}
          direction="column"
          paddingX="16px"
          paddingY="24px"
          align="center"
          gap="26px"
          zIndex={1}
        >
          <Flex
            width={contentWidths}
            height={58}
            backgroundColor={blocks}
            borderRadius="6px"
            align="center"
            justify="space-between"
            py="12px"
            px="32px"
          >
            <Button onClick={toggleColorMode} background="none" variant="link">
              <Image
                src={lightToggle}
                alt="Toggle color mode"
              />
            </Button>
            <Text
              textStyle="app_med_18"
              display={{ base: "block", md: "none" }}
              color={contrastText}
            >
              Home
            </Text>
            <Button
              backgroundColor={buttonBg}
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
                src={hamburgerIcon}
                alt="Hamburger icon"
              />
            </Button>
          </Flex>
          <Flex direction="column" width={contentWidths} gap="12px">
            {menuItems.map((el: MenuItem, index: number) => {
              return (
                <Link
                  key={index}
                  textStyle="app_reg_14"
                  color={contrastText}
                  backgroundColor={blocks}
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
            })}
            <Link
              textStyle="app_reg_14"
              color={contrastText}
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
            </Link>
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default Navbar;