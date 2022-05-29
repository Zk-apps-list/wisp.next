import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import BlueButton from "../src/components/BlueButton";
import TransparentButton from "../src/components/TransparentButton";
import Footer from "../src/components/Footer";
import { useState } from "react";

const Home: NextPage = () => {
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
      <Head>
        <title>Wisp</title>
        <meta
          name="description"
          content="Turn your wallet into a decentralized bank"
        />
        <link rel="icon" href="../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Flex
        width={contentWidths}
        height={58}
        backgroundColor="block"
        borderRadius="6px"
        align="center"
        justify="space-between"
        padding="12px"
      >
        <Image
          src="icons/logo-md.svg"
          display={{ base: "none", md: "block" }}
          mr="55px"
        />
        <Image src="icons/logo-sm.svg" display={{ base: "block", md: "none" }} />
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
            href="#"
            textStyle="land_reg_14"
            color="neutral.0"
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
          >
            How it works?
          </Link>
          <BlueButton ml="auto">Connect Wallet</BlueButton>
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
          Pay with{" "}
          <Box as="span" fontWeight="medium">
            a new way
          </Box>
          <br />
          in{" "}
          <Box as="span" fontWeight="medium">
            a new world
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
      <Flex justify="center" gap="32px" mt="24px">
        <BlueButton>Get Started</BlueButton>
        <TransparentButton>How it works?</TransparentButton>
      </Flex>
      <Box overflow="hidden" mt="56px" width="100%">
        <Image
          src="images/landing-phones.svg"
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
              Like a piece of cake
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
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src="images/how-it-works-wallet.svg"
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
              request within a click
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
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src="images/how-it-works-request.svg"
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
              Send a link to make <br />
              request payment
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Ready to get paid? Copy and send link to <br />
              recipient to easily request payment
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
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src="images/how-it-works-link.svg"
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
        End-to-end private crypto payments without revealing address <br /> and
        financial management in a single solution.
      </Text>
      <BlueButton mt="32px">Try us out for free</BlueButton>
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
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-wallet.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Payment & Transaction
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Payment & Request payments have never <br />
            been so easy. Wisp Finance keep all your
            <br /> transaction history next to your hand.
          </Text>
        </Flex>
        <Flex
          backgroundColor="block"
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-liquidity.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Liquidity Pool
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Wisp Finance guarantee a profit <br /> from reinvestment APY of your{" "}
            <br />
            money that you haven&apos;t withdraw <br />
            yet.
          </Text>
        </Flex>
        <Flex
          backgroundColor="block"
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="images/why-wisp-docs.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Compliance docs
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color="neutral.400"
            textAlign="center"
          >
            Wisp Finance helps you compliant <br />
            with law for all transactions. <br />
            Generate, send, and collect signed <br />
            legal docs within click.
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
              <Flex align="center">
                <Image src="icons/rocket-icon.svg" mr="12px" />
                Get started
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
