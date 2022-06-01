import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const Wallet = (props: any) => {
  const { account, connectWallet, disconnect, isLoading } = props;

  return (
    <>
      <Box ml="auto">
        {!account ? (
          <Box as={Button}
            backgroundColor={"primary.800"}
            borderRadius="6px"
            py="12px"
            height="34px"
            textAlign="center"
            ml="36px"
            _hover={{ bg: "primary.700" }}
            onClick={connectWallet}
            isLoading={isLoading}
          >
            <Text ml="auto" mr="auto" color="white" textStyle="app_reg_12">Connect Wallet</Text>
          </Box>
        ) : (
          <Box
            as={Button}
            backgroundColor={"primary.800"}
            borderRadius="6px"
            py="12px"
            textAlign="center"
            ml="36px"
            _hover={{ bg: "primary.700" }}
            onClick={disconnect}
            isLoading={isLoading}
          >
            <Text ml="auto" mr="auto" color="white" textStyle="app_reg_12">Disconnect</Text>
          </Box>
          )
        }
      </Box>
    </>
  )
}

export default Wallet;