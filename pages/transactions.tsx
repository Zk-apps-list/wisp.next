import { Box, Button, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { colors } from '../styles/colors';
import { app } from '../styles/fonts';
import { truncateWallet } from '../util/truncateWallet';
import { useRouter } from 'next/router';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement
// } from 'chart.js';

const TransactionRow = (props: any) => {
  const { token, transactionId, status, amount, value, date } = props;

  const tokenToLogo = () => {
    switch (token) {
      case 'ETH':
        return require('/assets/icons/eth_logo.svg');
      case 'USDC':
        return require('/assets/icons/usdc_logo.svg');
      case 'UNI': default:
        return require('/assets/icons/uniswap_logo.svg');
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
          <Text color="white" {...app.reg_14} ml="8px" mt="2px">{tokenToText()}</Text>
        </Box>
      </Td>
      
      <Td color="white" {...app.reg_14}>
        {truncateWallet(transactionId, 15)}
      </Td>

      <Td color="white" {...app.reg_14}>{status}</Td>

      <Td color="white" {...app.reg_14}>{amount}</Td>

      <Td color="white" {...app.reg_14} isNumeric>{value}</Td>

      <Td color="white" {...app.reg_14} isNumeric>{date}</Td>
    </Tr>
  )
}

const Transactions = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Box backgroundColor={colors.background_start} height="100vh">
      {/* Left Panel */}
      <Box display="flex" flexDirection="row">
        <Box width="80px" height="500px" backgroundColor={colors.block} display="flex" flexDirection="column" borderWidth="1" borderColor="yellow">
          <Link onClick={() => router.push(`/`)}>
            <Box textAlign="center" m="12px" p="8px">
              <Image src={require('/assets/icons/logo.svg')} alt='Wisp Logo' width="30px" height="30px" />
            </Box>
          </Link>
          <Box
            as="button"
            textAlign="center"
            m="12px"
            p="8px"
            borderRadius="6px"
            backgroundColor={pathname === "/overview" ? colors.primary_800 : 'transparent'}
            _hover={{ bg: colors.primary_800 }}
            onClick={() => router.push(`/overview`)}
          >
            <Image src={require('/assets/icons/dashboard.svg')} alt='Dashboard' width="30px" height="30px" />
          </Box>
          <Box
            as="button"
            textAlign="center"
            m="12px"
            p="8px"
            borderRadius="6px"
            backgroundColor={pathname === "/transactions" ? colors.primary_800 : 'transparent'}
            _hover={{ bg: colors.primary_800 }}
            onClick={() => router.push(`/transactions`)}
          >
            <Image src={require('/assets/icons/transactions.svg')} alt='Transactions' width="30px" height="30px" />
          </Box>
        </Box>

        {/* Right Panel */}
        <Box flex={10}>
          {/* Header */}
          <Box p="32px" display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
              <Text color="white" {...app.med_28}>Transactions</Text>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box>
                <Box as="button"
                  backgroundColor={colors.primary_800}
                  borderRadius="6px"
                  py="12px"
                  width="110px"
                  textAlign="center"
                  ml="36px"
                  _hover={{ bg: colors.primary_700 }}
                >
                    <Text ml="auto" mr="auto" color="white" {...app.reg_16}>Create Link</Text>
                </Box>
              </Box>
              <Box color="white" px="16px" py="8px" {...app.reg_14}>
                  0xa0492...4959123
              </Box>
            </Box>
          </Box>

          {/* Transactions Table */}
          <Box mx="32px">
            <Box m="32px" borderRadius="4px" backgroundColor={colors.block} p="16px">
              <TableContainer>
                <Table variant="simple">
                  {/* {submissions.length != 0 && ( */}
                    <>
                      <Thead>
                        <Tr>
                          <Th {...app.light_14} color={colors.neutral_500}>Token</Th>

                          <Th {...app.light_14} color={colors.neutral_500}>Transaction ID</Th>
                          
                          <Th {...app.light_14} color={colors.neutral_500}>Status</Th>

                          <Th {...app.light_14} color={colors.neutral_500}>Amount</Th>

                          <Th {...app.light_14} color={colors.neutral_500} isNumeric>Value</Th>

                          <Th {...app.light_14} color={colors.neutral_500} isNumeric>Date</Th>
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