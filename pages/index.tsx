import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import BlueButton from "../src/components/BlueButton";
import TransparentButton from "../src/components/TransparentButton";
import Footer from "../src/components/Footer";

const Home: NextPage = () => {
  const contentWidths = [1088];
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
        width={1088}
        height={58}
        backgroundColor="block"
        borderRadius="6px"
        align="center"
        justify="start"
        padding="12px"
      >
        <Image src="logo-md.svg" mr="55px" />
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
        >
          How it works?
        </Link>
        <BlueButton ml="auto">Connect Wallet</BlueButton>
      </Flex>
      <Flex mt="88px">
        <Text textStyle="land_reg_56" textAlign="center" color="neutral.0">
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
      <Box width={1400} mt="56px">
        <Image src="landing-phones.svg" />
      </Box>
      <Text mt="100px" textStyle="land_reg_40" color="neutral.0">
        How it works
      </Text>
      <Flex
        mt="35px"
        width={1088}
        direction="column"
        position="relative"
        gap="92px"
      >
        <Flex justify="space-between">
          <Flex direction="column">
            <Text textStyle="land_reg_14" color="primary.700" mb="4px">
              CONNECT WALLET
            </Text>
            <Text textStyle="land_reg_24" color="neutral.0" mb="12px">
              Like a piece of cake
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
              mb="12pxFrame 1.svg"
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
            >
              Get started{" "}
              <Image
                src="blue-arrow-right-thin.svg"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image src="how-it-works-wallet.svg" />
        </Flex>

        <Flex direction="row-reverse" justify="space-between">
          <Flex direction="column">
            <Text textStyle="land_reg_14" color="primary.700" mb="4px">
              CREATE LINK
            </Text>
            <Text textStyle="land_reg_24" color="neutral.0" mb="12px">
              Make a payment request <br /> with one click
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
              mb="12pxFrame 1.svg"
            >
              Choose cryptocurency, enter amount you want <br /> to get and get
              link to request payment
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
            >
              Get started{" "}
              <Image
                src="blue-arrow-right-thin.svg"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image src="how-it-works-request.svg" />
        </Flex>
        <Flex justify="space-between">
          <Flex direction="column">
            <Text textStyle="land_reg_14" color="primary.700" mb="4px">
              SHARE
            </Text>
            <Text textStyle="land_reg_24" color="neutral.0" mb="12px">
              Send link to make a <br /> payment
            </Text>
            <Text
              textStyle="land_light_14_175"
              color="neutral.400"
              mb="12pxFrame 1.svg"
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
            >
              Get started{" "}
              <Image
                src="blue-arrow-right-thin.svg"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image src="how-it-works-link.svg" />
        </Flex>
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
        textStyle="land_reg_40"
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
      <Flex mt="56px" mb="154px" width={1088} justifyContent="space-between">
        <Flex
          backgroundColor="block"
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image src="why-wisp-wallet.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Payment & Transaction
          </Text>
          <Text textStyle="land_light_14_175" mt="16px" color="neutral.400">
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
          <Image src="why-wisp-wallet.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Payment & Transaction
          </Text>
          <Text textStyle="land_light_14_175" mt="16px" color="neutral.400">
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
          <Image src="why-wisp-wallet.svg" />
          <Text textStyle="land_reg_20" mt="28px" color="neutral.0">
            Payment & Transaction
          </Text>
          <Text textStyle="land_light_14_175" mt="16px" color="neutral.400">
            Payment & Request payments have never <br />
            been so easy. Wisp Finance keep all your
            <br /> transaction history next to your hand.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
