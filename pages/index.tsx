import type { NextPage } from "next";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Wallet from "../components/Wallet";
import { AuthContext } from "../contexts/AuthContext";

import { providerOptions } from '../services/WalletConnect';
import Web3Modal from "web3modal";
import { useRouter } from "next/router";

export let web3Modal: any;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
    theme: {
      background: 'rgb(39, 49, 56)',
      main: 'rgb(199, 199, 199)',
      secondary: 'rgb(136, 136, 136)',
      border: 'rgba(195, 195, 195, 0.14)',
      hover: 'rgb(16, 26, 32)'
    }
  })
}

const Home: NextPage = () => {
  const router = useRouter();
  const { account, connectWallet, disconnect, isWalletLoading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

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
      backgroundColor="landingBG"
    >
      <Flex
        width={contentWidths}
        height={58}
        backgroundColor="block"
        borderRadius="6px"
        align="center"
        justify="space-between"
        py="12px"
        px="32px"
      >
        <Link mr="55px" onClick={() => router.push(`/`)}>
          <Image
            src="icons/logo-md.svg"
            alt="Wisp Logo"
            display={{ base: "none", md: "block" }}
            width="70px"
          />
        </Link>
        <Link onClick={() => router.push(`/`)}>
          <Image
            src="icons/logo-sm.svg"
            alt="Wisp Logo"
            display={{ base: "block", md: "none" }}
            onClick={() => router.push(`/`)}
          />
        </Link>
        <Text
          textStyle="app_med_18"
          display={{ base: "block", md: "none" }}
          color="neutral.0"
        >
          Home
        </Text>
        <Flex align="center" flex="1" display={{ base: "none", md: "flex" }}>
          <Link
            href="#"
            textStyle="land_reg_14"
            color="neutral.0"
            mr="24px"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            href="#how"
            textStyle="land_reg_14"
            color="neutral.0"
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
          >
            How It Works
          </Link>
          <Link
            href="#why"
            textStyle="land_reg_14"
            color="neutral.0"
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
          >
            Why Wisp
          </Link>
          {/* <Wallet
            account={account}
            connectWallet={connectWallet}
            disconnect={disconnect}
            isLoading={isWalletLoading}
          /> */}
        </Flex>
        <Button
          backgroundColor="neutral.800"
          w="36px"
          h="36px"
          p="0"
          display={{ base: "block", md: "none" }}
          onClick={() => setMenuOpen(true)}
        >
          <Image w="20px" h="20px" mx="auto" src="icons/hamburger-icon.svg" />
        </Button>
      </Flex>
      <Flex mt="88px">
        <Text
          textStyle={{ base: "land_reg_35", md: "land_reg_56" }}
          textAlign="center"
          color="neutral.0"
        >
          Turn your public wallet {" "}
          <Box as="span" fontWeight="medium">
            into a
          </Box>
          <br />
          a{" "}
          <Box as="span" fontWeight="medium">
            private bank.
          </Box>
        </Text>
      </Flex>
      <Flex mt="32px">
        <Text
          textStyle="land_light_14_200"
          textAlign="center"
          color="neutral.400"
          marginX="30px"
        >
          Wisp Finance is the easiest, safest, and fastest way to request secure
          and <br />
          private payment using cryptocurrency without revealing address.
        </Text>
      </Flex>
      {/* <Flex justify="center" gap="32px" mt="24px">
        <BlueButton>Get Started</BlueButton>
        <TransparentButton>How it works?</TransparentButton>
      </Flex> */}
      <Box overflow="hidden" mt="56px" width="100%">
        <Image
          src="images/landing-phones.png"
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
        id="how"
        mt="100px"
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color="neutral.0"
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
              color="neutral.0"
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Start by connecting <br />your wallet of choice
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
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
            src="images/how-it-works-wallet.svg"
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
              color="neutral.0"
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Make a payment <br />
              request with one click
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Choose cryptocurency, enter amount you want <br />
              to get and get link to request payment
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
            src="images/how-it-works-request.svg"
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
              color="neutral.0"
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Send link
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
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
            src="images/how-it-works-link.svg"
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
          >
            3
          </Box>
        </Flex>
      </Flex>
      <Box
        id="why"
        backgroundColor="block"
        padding="4px 12px"
        borderRadius="6px"
        mt="160px"
      >
        <Text textStyle="land_light_14_175" color="neutral.0">
          Why Wisp Finance
        </Text>
      </Box>
      <Text
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color="neutral.0"
        mt="8px"
        textAlign="center"
      >
        Private, Profitable & Simple
      </Text>
      <Text
        textStyle="land_light_14_175"
        color="neutral.400"
        mt="8px"
        textAlign="center"
      >
        End-to-end private crypto payments, <br /> and
        financial management in one single solution.
      </Text>
      {/* <BlueButton mt="32px">Try us out for free</BlueButton> */}
      <Flex
        mt="56px"
        mb="154px"
        width={contentWidths}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        maxW={contentWidths}
        gap={{ base: "24px", md: "0px" }}
      >
        <Flex
          backgroundColor="block"
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-wallet.svg" alt="Wisp wallet" width="120px" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Payment & Transactions
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Paying & requesting payments have never
            <br />been easier. Wisp Finance keeps
            <br />a record of all your transactions.
          </Text>
        </Flex>
        <Flex
          backgroundColor="block"
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-liquidity.svg" alt="Wisp liquidity" width="120px" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Liquidity Pool
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Wisp Finance passively reinvests <br /> your money for APY gains.
          </Text>
        </Flex>
        <Flex
          backgroundColor="block"
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-docs.svg" alt="Wisp docs" width="120px" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Compliance
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Wisp Finance helps you stay compliant <br />
            with the law for all transactions.
          </Text>
        </Flex>
      </Flex>
      <Footer />
      {menuOpen && (
        <Flex
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
          backgroundColor="landingBG"
          direction="column"
          paddingX="16px"
          paddingY="24px"
          align="center"
          gap="26px"
        >
          <Flex
            width={contentWidths}
            height={58}
            backgroundColor="block"
            borderRadius="6px"
            align="center"
            justify="space-between"
            padding="12px"
          >
            <Image src="logo-sm.svg" display={{ base: "block", md: "none" }} />
            <Text
              textStyle="app_med_18"
              display={{ base: "block", md: "none" }}
              color="neutral.0"
            >
              Home
            </Text>
            <Button
              backgroundColor="neutral.800"
              w="36px"
              h="36px"
              p="0"
              display={{ base: "block", md: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              <Image w="20px" h="20px" mx="auto" src="icons/hamburger-icon.svg" />
            </Button>
          </Flex>
          <Flex direction="column" width={contentWidths} gap="12px">
            <Link
              textStyle="app_reg_14"
              color="neutral.0"
              backgroundColor="block"
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              <Flex align="center">
                <Image src="icons/home-icon.svg" mr="12px" />
                Home
              </Flex>
            </Link>
            <Link
              textStyle="app_reg_14"
              color="neutral.0"
              backgroundColor="block"
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              <Flex align="center">
                <Image src="icons/settings-icon.svg" mr="12px" />
                How it works
              </Flex>
            </Link>
            <Link
              textStyle="app_reg_14"
              color="neutral.0"
              backgroundColor="primary.700"
              borderRadius="6px"
              w="100%"
              p="15px"
              href="#"
            >
              {/* <Flex align="center">
                <Wallet
                  account={account}
                  connectWallet={connectWallet}
                  disconnect={disconnect}
                  isLoading={isWalletLoading}
                />
              </Flex> */}
            </Link>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
