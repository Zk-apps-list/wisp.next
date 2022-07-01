import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useColor } from "../hooks/useColor";
import { AuthContext } from "../contexts/AuthContext";

const LeftPanel = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const { disconnect } = useContext(AuthContext);
  const { logoMd } = useColor();

  return (
    <Box
      width="224px"
      py="24px"
      px="16px"
      height="100vh"
      background="linear-gradient(145.39deg, #385CD9 36.67%, #147BDA 75.02%)"
      display={{
        base: "none",
        md: "flex"
      }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        display={{
          base: "none",
          md: "flex"
        }}
        flexDirection="column"
      >
        <Link onClick={() => router.push(`/`)}>
          <Box textAlign="center" m="12px" p="8px">
            <Image
              src={logoMd}
              alt="Wisp Logo"
              mx="auto"
            />
          </Box>
        </Link>
        <Flex direction="column" mt="24px">
          <Box
            as={Button}
            borderRadius="6px"
            py="12px"
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
            py="12px"
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
        </Flex>
      </Box>
      <Box
          as={Button}
          borderRadius="6px"
          mt="12px"
          py="12px"
          textAlign="center"
          leftIcon={
            <Image
              src="icons/leave.svg"
              alt="Transactions Icon"
              width="24px"
              height="24px"
            />
          }
          backgroundColor="transparent"
          _hover={{ bg: "primary.900" }}
          onClick={() => disconnect()}
        >
          <Text mr="auto" color="neutral.0" textStyle="app_reg_14">
            Log out
          </Text>
        </Box>
    </Box>
  );
};

export default LeftPanel;
