import type { NextPage } from "next";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Wallet from "../components/Wallet";
import { AuthContext } from "../contexts/AuthContext";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { providerOptions } from "../services/WalletConnect";
import Web3Modal from "web3modal";

export let web3Modal: any;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  });
}

const Home: NextPage = () => {
  const { account, connectWallet, disconnect, isWalletLoading } =
    useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('HOME');

  const landingBG = useColorModeValue( "light_neutral.50", "landingBG");
  const navigationBG = useColorModeValue("neutral.0", "block");
  const landingPhones = useColorModeValue("images/landing-phones-light.png", "images/landing-phones.png");
  const contrastText = useColorModeValue("light_neutral.800", "neutral.0");
  const menuText = useColorModeValue("light_neutral.800", "neutral.0");
  const selectedMenuText = useColorModeValue("light_neutral.800", "neutral.500");
  const reverseContrastText = useColorModeValue("light_neutral.800", "neutral.800");
  const reverseContractTextBorder = useColorModeValue("light_neutral.200", "transparent");
  const dimText = useColorModeValue("light_neutral.600", "neutral.400",);
  const blocks = useColorModeValue("neutral.0", "block");
  const logoMd = useColorModeValue("icons/logo-md-light.svg", "icons/logo-md.svg");
  const logoSm = useColorModeValue("icons/logo-sm-light.svg", "icons/logo-sm.svg");
  const lightToggle = useColorModeValue("icons/icon-sun.svg", "icons/icon-moon.svg");
  const buttonBg = useColorModeValue("light_neutral.50", "neutral.800");
  const hamburgerIcon = useColorModeValue("icons/hamburger-icon-light.svg", "icons/hamburger-icon.svg");
  const howItWorksWallet = useColorModeValue("images/how-it-works-wallet-light.svg", "images/how-it-works-wallet.svg");
  const settingsIcon = useColorModeValue("icons/settings-icon-light.svg", "icons/settings-icon.svg");
  const homeIcon = useColorModeValue("icons/home-icon-light.svg", "icons/home-icon.svg");
  const howItWorksRequest = useColorModeValue("images/how-it-works-request-light.svg", "images/how-it-works-request.svg");
  const howItWorksLink = useColorModeValue("images/how-it-works-link-light.svg", "images/how-it-works-link.svg");
  const walletIcon = useColorModeValue("images/why-wisp-wallet-light.svg", "images/why-wisp-wallet.svg");
  const liquidityIcon = useColorModeValue("images/why-wisp-liquidity-light.svg", "images/why-wisp-liquidity.svg");
  const docsIcon = useColorModeValue("images/why-wisp-docs-light.svg", "images/why-wisp-docs.svg");
  const whyWispBackground = useColorModeValue("light_neutral.100", "block");
  const whyWispText = useColorModeValue("light_neutral.500", "neutral.0");

  const contentWidths = {
    base: "343px",
    sm: "544px",
    md: "768px",
    lg: "1008px",
    xl: "1088px",
    xxl: "1088px",
  };

  return (
    <Flex
      align="center"
      direction="column"
      paddingTop="24px"
      backgroundColor={landingBG}
    >
      <Flex
        width={contentWidths}
        height={58}
        backgroundColor={navigationBG}
        borderRadius="6px"
        align="center"
        justify="space-between"
        py="12px"
        px="32px"
        position="fixed"
        zIndex={1}
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
          Menu
        </Text>
        <Flex align="center" flex="1" display={{ base: "none", md: "flex" }}>
          <Link
            href="#"
            textStyle="land_reg_14"
            color={menu === "HOME" ? menuText : selectedMenuText}
            mr="24px"
            _hover={{ textDecoration: "none" }}
            onClick={() => setMenu('HOME')}
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            textStyle="land_reg_14"
            color={menu === "HOW_IT_WORKS" ? menuText : selectedMenuText}
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
            onClick={() => setMenu('HOW_IT_WORKS')}
          >
            How it works
          </Link>
          <Link
            href="#why-wisp"
            textStyle="land_reg_14"
            color={menu === "WHY_WISP" ? menuText : selectedMenuText}
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
            onClick={() => setMenu('WHY_WISP')}
          >
            Why Wisp
          </Link>
          <Button
            onClick={toggleColorMode}
            ml="auto"
            background="none"
            variant="link"
          >
            <Image src={lightToggle} alt="Light toogle"/>
          </Button>
          {/* <Wallet
            account={account}
            connectWallet={connectWallet}
            disconnect={disconnect}
            isLoading={isWalletLoading}
          /> */}
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
      <Flex mt="138px">
        <Text
          maxWidth="800px"
          mx="24px"
          textStyle={{ base: "land_reg_35", md: "land_reg_56" }}
          textAlign="center"
          color={contrastText}
        >
            Turn your <Box as="span" fontWeight="medium">public wallet</Box><br />into {" "}
          <Box as="span" fontWeight="medium">
            a private bank.
          </Box>
        </Text>
      </Flex>
      <Flex mt="32px">
        <Text
          maxWidth="600px"
          textStyle="land_light_14_200"
          textAlign="center"
          color={dimText}
          mx="30px"
        >
          Wisp Finance is the easiest, safest, and fastest way to request secure and private payment using cryptocurrency without revealing your wallet address.
        </Text>
      </Flex>
      {/* <Flex justify="center" gap="32px" mt="24px">
        <BlueButton>Get Started</BlueButton>
        <TransparentButton color={contrastText}>
          How it works?
        </TransparentButton>
      </Flex> */}
      <Box overflow="hidden" mt="56px" width="100%">
        <Image
          src={landingPhones}
          alt="jumbotron image"
          width={{
            base: "875px",
            sm: "875px",
            md: "1400px",
            lg: "1400px",
            xl: "1400px",
            xxl: "1582px",
          }}
          maxW="none"
          transform={{ base: "translateX(-35%)", sm: "translateX(-50%)" }}
          left="50%"
          objectFit="contain"
          position="relative"
        />
      </Box>
      <Text
        id="how-it-works"
        mt="100px"
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color={contrastText}
      >
        How it works
      </Text>
      <Flex
        mt="35px"
        width={contentWidths}
        direction="column"
        position="relative"
        gap="92px"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  1
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              CONNECT WALLET
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Start by connecting <br />your wallet of choice
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Connect your wallet
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksWallet}
            alt="how it works wallet"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row-reverse" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  2
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              CREATE LINK
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Make a payment <br />
              request with one click
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Choose cryptocurency, and enter amount <br />
              you want to get the link to request payment
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksRequest}
            alt="how it works request"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  3
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              SHARE
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Send link
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Copy and send link to the <br />
              recipient to request payment
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksLink}
            alt="how it works link"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>

        {/*Steps*/}
        <Flex
          w="1"
          height="80%"
          borderLeftWidth="1px"
          borderStyle="dashed"
          borderColor="neutral.700"
          direction="column"
          justify="space-between"
          position="absolute"
          top="10%"
          left="50%"
          display={{ base: "none", md: "flex" }}
        >
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            1
          </Box>
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            2
          </Box>
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            3
          </Box>
        </Flex>
      </Flex>
      <Box
        id="why-wisp"
        backgroundColor={whyWispBackground}
        padding="4px 12px"
        borderRadius="6px"
        mt="160px"
      >
        <Text
          textStyle="land_light_14_175"
          color={whyWispText}
        >
          Why Wisp Finance
        </Text>
      </Box>
      <Text
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color={contrastText}
        mt="8px"
        textAlign="center"
      >
        Private, Profitable & Simple
      </Text>
      <Text
        textStyle="land_light_14_175"
        color={dimText}
        mt="8px"
        textAlign="center"
      >
        End-to-end private crypto payments without revealing your address <br /> and
        financial management in a single solution.
      </Text>
      {/* <BlueButton mt="32px">Try us out for free</BlueButton> */}
      <Flex
        mt="56px"
        mb="154px"
        width={contentWidths}
        justifyContent="space-between"
        direction={{ base: "column", lg: "row" }}
        maxW={contentWidths}
        gap={{ base: "24px", lg: "0px" }}
      >
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={walletIcon}
            alt="Wisp wallet"
            width="120px"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Payment & Transactions
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Paying & requesting payments have 
            <br />never been easier. Wisp Finance 
            <br />keeps a record of all your transactions.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={liquidityIcon}
            alt="Wisp liquidity"
            width="120px"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Liquidity Pool
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Wisp Finance passively reinvests <br /> your money for APY gains.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={docsIcon}
            width="120px"
            alt="Wisp docs"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Compliance
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Wisp Finance helps you stay compliant <br />
            with the law for all transactions.
          </Text>
        </Flex>
      </Flex>
      <Footer bg={blocks} />
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
            <Link
              textStyle="app_reg_14"
              color={contrastText}
              backgroundColor={blocks}
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              <Flex align="center">
                <Image
                  src={homeIcon}
                  mr="12px"
                  alt="Home icon"
                />
                Home
              </Flex>
            </Link>
            <Link
              textStyle="app_reg_14"
              color={contrastText}
              backgroundColor={blocks}
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              <Flex align="center">
                <Image
                  src={settingsIcon}
                  mr="12px"
                  alt="Settings icon"
                />
                How it works
              </Flex>
            </Link>
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
                {/*<Image src="icons/rocket-icon.svg" mr="12px" />*/}
                {/* <Wallet
                  ml="0px"
                  account={account}
                  connectWallet={connectWallet}
                  disconnect={disconnect}
                  isLoading={isWalletLoading}
                /> */}
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
