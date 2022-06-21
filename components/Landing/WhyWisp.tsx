import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useColor } from '../../hooks/useColor';

const WhyWisp = () => {
  const {
    contrastText,
    dimText,
    blocks,
    walletIcon,
    liquidityIcon,
    docsIcon,
    whyWispBackground,
    whyWispText,
  } = useColor();

  const contentWidths = {
    base: "343px",
    sm: "544px",
    md: "768px",
    lg: "1008px",
    xl: "1088px",
    xxl: "1088px",
  };

  return (
    <>
      <Box
        id="why-wisp"
        backgroundColor={whyWispBackground}
        padding="4px 12px"
        borderRadius="6px"
        mt="160px"
      >
        <Text
          textStyle="land_light_14_175"
          color={whyWispText}
        >
          Why Wisp Finance
        </Text>
      </Box>
      <Text
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color={contrastText}
        mt="8px"
        textAlign="center"
      >
        Private, Profitable & Simple
      </Text>
      <Text
        textStyle="land_light_14_175"
        color={dimText}
        mt="8px"
        textAlign="center"
      >
        End-to-end private crypto payments without revealing your address <br /> and
        financial management in a single solution.
      </Text>
      <Flex
        mt="56px"
        mb="154px"
        width={contentWidths}
        justifyContent="space-between"
        direction={{ base: "column", lg: "row" }}
        maxW={contentWidths}
        gap={{ base: "24px", lg: "0px" }}
      >
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={walletIcon}
            alt="Wisp wallet"
            width="120px"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Payment & Transactions
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Paying & requesting payments have 
            <br />never been easier. Wisp Finance 
            <br />keeps a record of all your transactions.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={liquidityIcon}
            alt="Wisp liquidity"
            width="120px"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Liquidity Pool
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Wisp Finance passively reinvests <br /> your money for APY gains.
          </Text>
        </Flex>
        <Flex
          backgroundColor={blocks}
          padding="28px"
          direction="column"
          alignItems="center"
          justify="space-between"
          borderRadius="6px"
          minWidth="330px"
        >
          <Image
            src={docsIcon}
            width="120px"
            alt="Wisp docs"
          />
          <Text textStyle="land_reg_20" mt="28px" color={contrastText}>
            Compliance
          </Text>
          <Text
            textStyle="land_light_14_175"
            mt="16px"
            color={dimText}
            textAlign="center"
          >
            Wisp Finance helps you stay compliant <br />
            with the law for all transactions.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default WhyWisp;