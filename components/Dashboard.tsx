import React from 'react';
import {
  Box,
  Text,
} from "@chakra-ui/react";
import { useColor } from '../hooks/useColor';

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

const Dashboard = () => {
  const { textColor, blocks } = useColor();

  return (
    <Box
      my="32px"
      p="32px"
      borderRadius="6px"
      width="100%"
      backgroundColor={blocks}
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
  )
}

export default Dashboard;