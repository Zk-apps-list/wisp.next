import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useColor } from "../../hooks/useColor";
import TransactionRow from "./TransactionRow";

const TransactionsTable = (props: any) => {
  const { showTitle } = props;
  const { blocks, borderColor } = useColor();

  return (
    <Box
      m="32px"
      borderRadius="4px"
      backgroundColor={blocks}
      p="16px"
    >
      {showTitle && <Flex justifyContent="space-between">
        <Text textStyle="app_med_16">Transaction History</Text>
        <Text textStyle="app_med_14" color="primary.700">View All</Text>
      </Flex>}
      <TableContainer>
        <Table variant="unstyled">
          <>
            <Thead borderBottomWidth="1px" borderColor={borderColor}>
              <Tr>
                <Th textStyle="app_light_14" color="neutral.500">
                  Token
                </Th>

                <Th textStyle="app_light_14" color="neutral.500">
                  Transaction ID
                </Th>

                <Th textStyle="app_light_14" color="neutral.500">
                  Status
                </Th>

                <Th textStyle="app_light_14" color="neutral.500">
                  Amount
                </Th>

                <Th
                  textStyle="app_light_14"
                  color="neutral.500"
                  isNumeric
                >
                  Value
                </Th>

                <Th
                  textStyle="app_light_14"
                  color="neutral.500"
                  isNumeric
                >
                  Date
                </Th>
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
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionsTable;
