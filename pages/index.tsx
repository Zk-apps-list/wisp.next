import type { NextPage } from "next";
import {
  background,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Wallet from "../components/Wallet";
import { AuthContext } from "../contexts/AuthContext";

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

  const landingBG = useColorModeValue("landingBG", "light_neutral.50");
  const navigationBG = useColorModeValue("block", "neutral.0");
  const landingPhones = useColorModeValue(
    "images/landing-phones.svg",
    "images/landing-phones-light.svg"
  );
  const contrastText = useColorModeValue("neutral.0", "light_neutral.800");
  const reverseContrastText = useColorModeValue(
    "neutral.800",
    "light_neutral.800"
  );
  const dimText = useColorModeValue("neutral.400", "light_neutral.600");
  const blocks = useColorModeValue("block", "neutral.0");

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
      >
        <Image
          src={useColorModeValue(
            "icons/logo-md.svg",
            "icons/logo-md-light.svg"
          )}
          alt="Wisp Logo"
          display={{ base: "none", md: "block" }}
          width="70px"
          mr="55px"
        />
        <Image
          src={useColorModeValue(
            "icons/logo-sm.svg",
            "icons/logo-sm-light.svg"
          )}
          alt="Wisp Logo"
          display={{ base: "block", md: "none" }}
        />
        <Text
          textStyle="app_med_18"
          display={{ base: "block", md: "none" }}
          color={contrastText}
        >
          Home
        </Text>
        <Flex align="center" flex="1" display={{ base: "none", md: "flex" }}>
          <Link
            href="#"
            textStyle="land_reg_14"
            color={contrastText}
            mr="24px"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            href="#"
            textStyle="land_reg_14"
            color={contrastText}
            mr="24px"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="inline-block"
          >
            How it works?
          </Link>
          <Button
            onClick={toggleColorMode}
            ml="auto"
            background="none"
            variant="link"
          >
            <Image
              src={useColorModeValue(
                "icons/icon-moon.svg",
                "icons/icon-sun.svg"
              )}
            />
          </Button>
          <Wallet
            account={account}
            connectWallet={connectWallet}
            disconnect={disconnect}
            isLoading={isWalletLoading}
          />
        </Flex>
        <Button
          backgroundColor={useColorModeValue("neutral.800", "light_neutral.50")}
          w="36px"
          h="36px"
          p="0"
          display={{ base: "block", md: "none" }}
          onClick={() => setMenuOpen(true)}
        >
          <Image
            w="20px"
            h="20px"
            mx="auto"
            src={useColorModeValue(
              "icons/hamburger-icon.svg",
              "icons/hamburger-icon-light.svg"
            )}
          />
        </Button>
      </Flex>
      <Flex mt="88px">
        <Text
          textStyle={{ base: "land_reg_35", md: "land_reg_56" }}
          textAlign="center"
          color={contrastText}
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
          color={dimText}
          marginX="30px"
        >
          Wisp Finance is the easiest, safest, and fastest way to request secure
          and <br />
          private payment using cryptocurrency without revealing address.
        </Text>
      </Flex>
      <Flex justify="center" gap="32px" mt="24px">
        <BlueButton>Get Started</BlueButton>
        <TransparentButton color={contrastText}>
          How it works?
        </TransparentButton>
      </Flex>
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
                  borderColor={useColorModeValue(
                    "transparent",
                    "light_neutral.200"
                  )}
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
              Like a piece of cake
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
            src={useColorModeValue(
              "images/how-it-works-wallet.svg",
              "images/how-it-works-wallet-light.svg"
            )}
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
                  borderColor={useColorModeValue(
                    "transparent",
                    "light_neutral.200"
                  )}
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
              request within a click
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
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
            src={useColorModeValue(
              "images/how-it-works-request.svg",
              "images/how-it-works-request-light.svg"
            )}
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
                  borderColor={useColorModeValue(
                    "transparent",
                    "light_neutral.200"
                  )}
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
              Send a link to make <br />
              request payment
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
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
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={useColorModeValue(
              "images/how-it-works-link.svg",
              "images/how-it-works-link-light.svg"
            )}
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
            borderColor={useColorModeValue("transparent", "light_neutral.200")}
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
            borderColor={useColorModeValue("transparent", "light_neutral.200")}
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
            borderColor={useColorModeValue("transparent", "light_neutral.200")}
          >
            3
          </Box>
        </Flex>
      </Flex>
      <Box
        backgroundColor={useColorModeValue("block", "light_neutral.100")}
        padding="4px 12px"
        borderRadius="6px"
        mt="160px"
      >
        <Text
          textStyle="land_light_14_175"
          color={useColorModeValue("neutral.0", "light_neutral.500")}
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
          backgroundColor={blocks}
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image
            src={useColorModeValue(
              "images/why-wisp-wallet.svg",
              "images/why-wisp-wallet-light.svg"
            )}
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Payment & Transaction
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Payment & Request payments have never <br />
            been so easy. Wisp Finance keep all your
            <br /> transaction history next to your hand.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image
            src={useColorModeValue(
              "images/why-wisp-liquidity.svg",
              "images/why-wisp-liquidity-light.svg"
            )}
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
            Wisp Finance guarantee a profit <br /> from reinvestment APY of your{" "}
            <br />
            money that you haven&apos;t withdraw <br />
            yet.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="24px 16px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
        >
          <Image
            src={useColorModeValue(
              "images/why-wisp-docs.svg",
              "images/why-wisp-docs-light.svg"
            )}
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Compliance docs
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Wisp Finance helps you compliant <br />
            with law for all transactions. <br />
            Generate, send, and collect signed <br />
            legal docs within click.
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
                src={useColorModeValue(
                  "icons/icon-moon.svg",
                  "icons/icon-sun.svg"
                )}
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
              backgroundColor={useColorModeValue(
                "neutral.800",
                "light_neutral.50"
              )}
              w="36px"
              h="36px"
              p="0"
              display={{ base: "block", md: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              <Image
                w="20px"
                h="20px"
                mx="auto"
                src={useColorModeValue(
                  "icons/hamburger-icon.svg",
                  "icons/hamburger-icon-light.svg"
                )}
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
                  src={useColorModeValue(
                    "icons/home-icon.svg",
                    "icons/home-icon-light.svg"
                  )}
                  mr="12px"
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
                  src={useColorModeValue(
                    "icons/settings-icon.svg",
                    "icons/settings-icon-light.svg"
                  )}
                  mr="12px"
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
    </Flex>
  );
};

export default Home;
