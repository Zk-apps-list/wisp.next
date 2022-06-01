import { Box, Button, Image, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { truncateWallet } from '../util/truncateWallet';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.2,
      borderJoinStyle: 'round',
    },
    point: {
      radius: 0,
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        boxHeight: 1,
        boxWidth: 32,
        padding: 20
      }
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,5,2,6,3,9,7,6,9,3,2,1],
      borderColor: "#147BDA",
      backgroundColor: "#147BDA",
      borderWidth: 1
    },
    {
      label: 'Dataset 2',
      data: [1,-5,2,-6,3,-9,7,8,2,4,10,8],
      borderColor: "#494b4d",
      backgroundColor: "#494b4d",
      borderWidth: 1,
    },
  ],
};


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

const Overview = () => {
  const router = useRouter();

  return (
    <Box backgroundColor="background.start" height="100%">
      <Box display="flex" flexDirection="row">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <Box flex={10}>
          <Header />

          {/* Total Value */}
          <Box mx="64px" >
            <Box>
              <Text color="neutral.400" textStyle="app_reg_16">Total Value</Text>
            </Box>
            
            <Box display="flex" flexDirection="row">
              <Box>
                <Text color="white" textStyle="app_reg_32">$15,294,453.00</Text>
              </Box>

              <Box ml="12px">
                <Text color="green" textStyle="app_reg_14">+ $435 Value</Text>
                <Text color="green" textStyle="app_reg_14">+ 5.00% APY</Text>
              </Box>

              <Box as={Button}
                backgroundColor={"primary.800"}
                borderRadius="6px"
                py="12px"
                width="110px"
                textAlign="center"
                ml="36px"
                _hover={{ bg: "primary.700" }}
                leftIcon={<Image src='icons/arrow_down.svg' alt='Ethereum Logo' width="16px" height="16px" />}
              >
                  <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">Withdraw</Text>
              </Box>

              {/* ETH */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                  <Image src='icons/eth_logo.svg' alt='Ethereum Logo' width="36px" height="36px" />
                </Box>
                <Text color="white" textStyle="app_reg_16" ml="8px" mt="5px">ETH 4.24</Text>
              </Box>

              {/* USDC */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                <Image src='icons/usdc_logo.svg' alt='USDC Logo' width="36px" height="36px" />
                </Box>
                <Text color="white" textStyle="app_reg_16" ml="8px" mt="5px">USDC 342</Text>
              </Box>

              {/* UniSwap */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                <Image src='icons/uniswap_logo.svg' alt='UniSwap Logo' width="36px" height="36px" />
                </Box>
                <Text color="white" textStyle="app_reg_16" ml="8px" mt="5px">UNI 116,537.09</Text>
              </Box>
            </Box>

            {/* Dashboards */}
            <Box my="32px" p="32px" borderRadius="6px" width="700px">
              <Text color="white" textStyle="app_med_16">Statistics</Text> 
              <Line
                data={data}
                width={400}
                height={200}
                options={options as any}
              />
            </Box>

            <Box my="32px" borderRadius="4px" backgroundColor="block" p="24px">
              <Box mt="16px" display="flex" flexDirection="row" justifyContent="space-between">
                <Text color="white" textStyle="app_med_16">Transaction History</Text>
                <Link onClick={() => router.push('/transactions')}>
                  <Text color="neutral.500" textStyle="app_reg_14">View all</Text>
                </Link>
              </Box>

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

export default Overview;