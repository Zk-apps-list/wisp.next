import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import { useColor } from "../hooks/useColor";
import Transactions from '../components/Transactions/Transactions';

const TransactionsPage = () => {
  const { overviewBG, blockColor, borderColor } = useColor();

  return (
    <Box backgroundColor={overviewBG} height="100%" minHeight="100vh">
      <Box display="flex" flexDirection="row">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <Box flex={10} ml="80px">
          <Header />

          {/* Transactions Table */}
          <Transactions />
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionsPage;
