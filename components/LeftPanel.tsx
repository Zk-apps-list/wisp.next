import { Box, Button, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

const LeftPanel = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Box width="80px" height="100vh" backgroundColor="block" display="flex" flexDirection="column">
      <Link onClick={() => router.push(`/`)}>
        <Box textAlign="center" m="12px" p="8px">
          <Image src='icons/logo.svg' alt='Wisp Logo' width="30px" height="30px" />
        </Box>
      </Link>
      <Box
        as={Button}
        textAlign="center"
        m="12px"
        p="8px"
        borderRadius="6px"
        backgroundColor={pathname === "/overview" ? "primary.800" : 'transparent'}
        _hover={{ bg: "primary.800" }}
        onClick={() => router.push(`/overview`)}
      >
        <Image src='icons/dashboard.svg' alt='Dashboard' width="30px" height="30px" />
      </Box>
      <Box
        as={Button}
        textAlign="center"
        m="12px"
        p="8px"
        borderRadius="6px"
        backgroundColor={pathname === "/transactions" ? "primary.800" : 'transparent'}
        _hover={{ bg: "primary.800" }}
        onClick={() => router.push(`/transactions`)}
      >
        <Image src='icons/transactions.svg' alt='Transactions' width="30px" height="30px" />
      </Box>
    </Box>
  )
};

export default LeftPanel