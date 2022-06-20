import { Box, Button, Image, Link } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useColor } from "../hooks/useColor";

const LeftPanel = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const { logoMd, blockColor } = useColor();

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
            src={logoMd}
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
