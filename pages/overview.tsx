import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { colors } from '../styles/colors';
import { app } from '../styles/fonts';

const Overview = () => {
  return (
    <Box backgroundColor="black">
      {/* Header */}
      <Box>
        <Box>
          <Text variant="h1" color="white">Overview</Text>
        </Box>
        <Box>
          <Box>
            <Button backgroundColor={colors.primary_900}>Create Link</Button>
          </Box>
          <Box color="white">
              0xa0492...4959123
          </Box>
        </Box>
      </Box>

      {/* Total Value */}
      <Box borderWidth="1px" borderColor="red">
        <Box>
          <Text color={colors.neutral_400} {...app.reg_16}>Total Value</Text>
        </Box>
        
        <Box display="flex" flexDirection="row">
          <Box>
            <Text color="white" {...app.reg_32}>$12,453.00</Text>
          </Box>

          <Box ml="12px">
            <Text color={colors.green} {...app.reg_14}>+ $435 Value</Text>
            <Text color={colors.green} {...app.reg_14}>+ 5.00% APY</Text>
          </Box>

          <Button
            backgroundColor={colors.primary_800}
            borderRadius="6px"
            py="12px"
            width="110px"
            textAlign="center"
            ml="36px"
          >
              <Text ml="auto" mr="auto" color="white" {...app.reg_16}>Withdraw</Text>
          </Button>

          {/* ETH */}
          <Box flexDirection="row" display="flex" ml="36px" mt="2px">
            <Box>
              <Image src={require('/assets/icons/eth_logo.svg')} alt='Ethereum Logo' width="36px" height="36px" />
            </Box>
            <Text color="white" {...app.reg_16} ml="8px" mt="5px">ETH 4.24</Text>
          </Box>

          {/* USDC */}
          <Box flexDirection="row" display="flex" ml="36px" mt="2px">
            <Box>
            <Image src={require('/assets/icons/usdc_logo.svg')} alt='USDC Logo' width="36px" height="36px" />
            </Box>
            <Text color="white" {...app.reg_16} ml="8px" mt="5px">USDC 342</Text>
          </Box>

          {/* UniSwap */}
          <Box flexDirection="row" display="flex" ml="36px" mt="2px">
            <Box>
            <Image src={require('/assets/icons/uniswap_logo.svg')} alt='UniSwap Logo' width="36px" height="36px" />
            </Box>
            <Text color="white" {...app.reg_16} ml="8px" mt="5px">UNI 116,537.09</Text>
          </Box>
        </Box>

        {/* Dashboards */}
        <Box>
          {/* TODO: Get from CompaoDao */}
          <Text color="white">Statistics</Text> 
        </Box>

        <Box>
          {/* TODO: Get from CompaoDao or Collective Action */}
          <Text color="white">Transaction History</Text>
        </Box>

      </Box>
    </Box>
  )
}

export default Overview;