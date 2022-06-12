import { Box, Button, Image, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const LeftPanel = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const logo = useColorModeValue(
    "icons/logo-sm-light.svg",
    "icons/logo-sm.svg"
  );
  const blockColor = useColorModeValue("light_neutral.0", "block");

  return (
    <Box
      position="fixed"
      width="80px"
      height="100vh"
      backgroundColor={blockColor}
      display="flex"
      flexDirection="column"
    >
      <Link onClick={() => router.push(`/`)}>
        <Box textAlign="center" m="12px" p="8px">
          <Image
            src={logo}
            alt="Wisp Logo"
            width="30px"
            height="30px"
            marginX="auto"
          />
        </Box>
      </Link>
      <Box
        as={Button}
        textAlign="center"
        m="12px"
        p="8px"
        borderRadius="6px"
        backgroundColor={
          pathname === "/overview" ? "primary.800" : "transparent"
        }
        _hover={{
          bg: pathname === "/overview" ? "primary.800" : "primary.100",
        }}
        onClick={() => router.push(`/overview`)}
      >
        <Image
          src={
            pathname === "/overview"
              ? "icons/dashboard.svg"
              : "icons/dashboard-default-light.svg"
          }
          alt="Dashboard"
          width="30px"
          height="30px"
        />
      </Box>
      <Box
        as={Button}
        textAlign="center"
        m="12px"
        p="8px"
        borderRadius="6px"
        backgroundColor={
          pathname === "/transactions" ? "primary.800" : "transparent"
        }
        _hover={{
          bg: pathname === "/transactions" ? "primary.800" : "primary.100",
        }}
        onClick={() => router.push(`/transactions`)}
      >
        <Image
          src={
            pathname === "/transactions"
              ? "icons/transactions.svg"
              : "icons/transactions-default-light.svg"
          }
          alt="Transactions"
          width="30px"
          height="30px"
        />
      </Box>
    </Box>
  );
};

export default LeftPanel;
