import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BlueButton from '../components/BlueButton';


const Request = () => {
  return (
    <Box backgroundColor="background.end" height="100vh">
      <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box>
          <Box display="flex" justifyContent="center">
            <Image src="icons/logo-md.svg" alt="logo" />
          </Box>
          <Box p="24px" width="400px" backgroundColor="block" borderRadius="6px" mt="32px">
            <Box>
                <Text color="white" textStyle="app_med_18">Connect your wallet to pay</Text>
            </Box>
            <Box mt="12px">
                <Text color="neutral.500" textStyle="app_reg_12">{`By connecting your wallet, you agree to Wisp's Terms, Privacy Policy, and Community Standards.`}</Text>
            </Box>
            <Box mt="32px" textAlign="center">
              <BlueButton ml="auto">Connect Wallet</BlueButton>
            </Box>
            <Box mt="32px">
                <Text color="white" textStyle="app_reg_14">
                  New to crypto? 
                  <Text as="span" ml="5px" color="primary.700">Learn more about wallets.</Text>
                </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Request;