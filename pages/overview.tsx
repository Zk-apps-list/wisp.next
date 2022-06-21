import {
  Box,
  Button,
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { truncateWallet } from "../util/truncateWallet";
import { useRouter } from "next/router";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useColor } from "../hooks/useColor";
import TransactionRow from "../components/Transactions/TransactionRow";
import Transactions from "../components/Transactions/Transactions";

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
      borderJoinStyle: "round",
    },
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "end",
      labels: {
        boxHeight: 1,
        boxWidth: 32,
        padding: 20,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 5, 2, 6, 3, 9, 7, 6, 9, 3, 2, 1],
      borderColor: "#147BDA",
      backgroundColor: "#147BDA",
      borderWidth: 1,
    },
    {
      label: "Dataset 2",
      data: [1, -5, 2, -6, 3, -9, 7, 8, 2, 4, 10, 8],
      borderColor: "#494b4d",
      backgroundColor: "#494b4d",
      borderWidth: 1,
    },
  ],
};

const OverviewPage = () => {
  const router = useRouter();

  const { overviewBG, textColor, borderColor, blockColor } = useColor();

  return (
    <Box backgroundColor={overviewBG} height="100%" minHeight="100vh">
      <Box display="flex" flexDirection="row">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <Box flex={10} ml="80px">
          <Header />

          {/* Total Value */}
          <Box mx="64px">
            <Box>
              <Text color="neutral.400" textStyle="app_reg_16">
                Total Value
              </Text>
            </Box>

            <Box display="flex" flexDirection="row">
              <Box>
                <Text color={textColor} textStyle="app_reg_32">
                  $15,294,453.00
                </Text>
              </Box>

              <Box ml="12px">
                <Text color="green" textStyle="app_reg_14">
                  + $435 Value
                </Text>
                <Text color="green" textStyle="app_reg_14">
                  + 5.00% APY
                </Text>
              </Box>

              <Box
                as={Button}
                backgroundColor={"primary.800"}
                borderRadius="6px"
                py="12px"
                width="110px"
                textAlign="center"
                ml="36px"
                _hover={{ bg: "primary.700" }}
                leftIcon={
                  <Image
                    src="icons/arrow_down.svg"
                    alt="Ethereum Logo"
                    width="16px"
                    height="16px"
                  />
                }
              >
                <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
                  Withdraw
                </Text>
              </Box>

              {/* ETH */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                  <Image
                    src="icons/eth_logo.svg"
                    alt="Ethereum Logo"
                    width="36px"
                    height="36px"
                  />
                </Box>
                <Text
                  color={textColor}
                  textStyle="app_reg_16"
                  ml="8px"
                  mt="5px"
                >
                  ETH 4.24
                </Text>
              </Box>

              {/* USDC */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                  <Image
                    src="icons/usdc_logo.svg"
                    alt="USDC Logo"
                    width="36px"
                    height="36px"
                  />
                </Box>
                <Text
                  color={textColor}
                  textStyle="app_reg_16"
                  ml="8px"
                  mt="5px"
                >
                  USDC 342
                </Text>
              </Box>

              {/* UniSwap */}
              <Box flexDirection="row" display="flex" ml="36px" mt="2px">
                <Box>
                  <Image
                    src="icons/uni_logo.svg"
                    alt="UniSwap Logo"
                    width="36px"
                    height="36px"
                  />
                </Box>
                <Text
                  color={textColor}
                  textStyle="app_reg_16"
                  ml="8px"
                  mt="5px"
                >
                  UNI 116,537.09
                </Text>
              </Box>
            </Box>

            {/* Dashboards */}
            <Box
              my="32px"
              p="32px"
              borderRadius="6px"
              width="700px"
              backgroundColor={blockColor}
            >
              <Text color={textColor} textStyle="app_med_16">
                Statistics
              </Text>
              <Line
                data={data}
                width={400}
                height={200}
                options={options as any}
              />
            </Box>

            <Transactions />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewPage;
