import { Box, Button, Image, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { truncateWallet } from '../util/truncateWallet';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';

const TransactionRow = (props: any) => {
  const { token, transactionId, status, amount, value, date } = props;

  const tokenToLogo = () => {
    switch (token) {
      case 'ETH':
        return 'icons/eth_logo.svg';
      case 'USDC':
        return 'icons/usdc_logo.svg';
      case 'UNI': default:
        return 'icons/uniswap_logo.svg';
    }
  }

  const tokenToText = () => {
    switch (token) {
      case 'ETH':
        return 'Ethereum (ETH)';
      case 'USDC':
        return 'USD Coin (USDC)';
      case 'UNI': default:
        return 'Uniswap (UNI)';
    }
  }

  return (
    <Tr>
      <Td>
        <Box flexDirection="row" display="flex">
          <Box>
            <Image src={tokenToLogo()} alt='Ethereum Logo' width="24px" height="24px" />
          </Box>
          <Text color="white" textStyle="app_reg_14" ml="8px" mt="2px">{tokenToText()}</Text>
        </Box>
      </Td>

      <Td color="white" textStyle="app_reg_14">
        {truncateWallet(transactionId, 15)}
      </Td>

      <Td color="white" textStyle="app_reg_14">{status}</Td>

      <Td color="white" textStyle="app_reg_14">{amount}</Td>

      <Td color="white" textStyle="app_reg_14" isNumeric>{value}</Td>

      <Td color="white" textStyle="app_reg_14" isNumeric>{date}</Td>
    </Tr>
  )
}

const Transactions = () => {
  return (
    <Box backgroundColor="background.start" height="100%">
      <Box display="flex" flexDirection="row">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <Box flex={10}>
          <Header />

          {/* Transactions Table */}
          <Box mx="32px">
            <Box m="32px" borderRadius="4px" backgroundColor="block" p="16px">
              <TableContainer>
                <Table variant="unstyled">
                  {/* {submissions.length != 0 && ( */}
                    <>
                      <Thead borderBottomWidth="1px" borderColor="neutral.800">
                        <Tr>
                          <Th textStyle="app_light_14" color="neutral.500">Token</Th>

                          <Th textStyle="app_light_14" color="neutral.500">Transaction ID</Th>
                          
                          <Th textStyle="app_light_14" color="neutral.500">Status</Th>

                          <Th textStyle="app_light_14" color="neutral.500">Amount</Th>

                          <Th textStyle="app_light_14" color="neutral.500" isNumeric>Value</Th>

                          <Th textStyle="app_light_14" color="neutral.500" isNumeric>Date</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <TransactionRow
                          token="ETH"
                          transactionId="0x24A2d17147F177F5a5d3e50C7717eC58Ccf59Ef3"
                          status="Received"
                          amount="3.52 ETH"
                          value="11,054.09 USD"
                          date="15/05/2022 3:25PM"
                        />

                        <TransactionRow
                          token="ETH"
                          transactionId="0x24A2d17147F177F5a5d3e50C7717eC58Ccf59Ef3"
                          status="Received"
                          amount="3.52 ETH"
                          value="11,054.09 USD"
                          date="15/05/2022 3:25PM"
                        />

                        <TransactionRow
                          token="ETH"
                          transactionId="0x24A2d17147F177F5a5d3e50C7717eC58Ccf59Ef3"
                          status="Received"
                          amount="3.52 ETH"
                          value="11,054.09 USD"
                          date="15/05/2022 3:25PM"
                        />

                      </Tbody>
                    </>
                  {/* )} */}
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Transactions;