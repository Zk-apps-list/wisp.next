import React from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useColor } from '../../hooks/useColor';

const HowItWorks = () => {
  const {
    contrastText,
    reverseContrastText,
    reverseContractTextBorder,
    dimText,
    howItWorksWallet,
    howItWorksRequest,
    howItWorksLink,
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
      <Text
        id="how-it-works"
        mt="100px"
        textStyle={{ base: "land_reg_32", md: "land_reg_40" }}
        color={contrastText}
      >
        How it works
      </Text>
      <Flex
        mt="35px"
        width={contentWidths}
        direction="column"
        position="relative"
        gap="92px"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  1
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              CONNECT WALLET
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Start by connecting <br />your wallet of choice
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Connect your wallet
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksWallet}
            alt="how it works wallet"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row-reverse" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  2
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              CREATE LINK
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Make a payment <br />
              request with one click
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Choose cryptocurency, and enter amount <br />
              you want to get the link to request payment
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksRequest}
            alt="how it works request"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "unset" }}
        >
          <Flex direction="column" align={{ base: "center", md: "unset" }}>
            <Box
              h="84px"
              marginBottom="20px"
              display={{ base: "block", md: "none" }}
            >
              <Flex
                w="1"
                height="100%"
                borderLeftWidth="1px"
                borderStyle="dashed"
                borderColor="neutral.700"
                direction="column"
                justify="center"
              >
                <Box
                  w="36px"
                  height="36px"
                  borderRadius="24px"
                  backgroundColor="neutral.0"
                  textAlign="center"
                  lineHeight="36px"
                  verticalAlign="center"
                  fontSize="18px"
                  transform="translateX(-50%)"
                  color={reverseContrastText}
                  borderWidth="1px"
                  borderColor={reverseContractTextBorder}
                >
                  3
                </Box>
              </Flex>
            </Box>
            <Text
              textStyle="land_reg_14"
              color="primary.700"
              mb="4px"
              textAlign={{ base: "center", md: "unset" }}
            >
              SHARE
            </Text>
            <Text
              textStyle={{ base: "land_reg_24_150", sm: "land_reg_24" }}
              color={contrastText}
              mb={{ base: "16px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Send link
            </Text>
            <Text
              textStyle="land_light_14_175"
              color={dimText}
              mb={{ base: "24px", md: "12px" }}
              textAlign={{ base: "center", md: "unset" }}
            >
              Copy and send link to the <br />
              recipient to request payment
            </Text>
            <Link
              href="#"
              textStyle="land_reg_14"
              color="primary.700"
              verticalAlign="center"
              display="flex"
              alignItems="center"
              textAlign={{ base: "center", md: "unset" }}
              mb={{ base: "38px", md: "unset" }}
            >
              Get started
              <Image
                src="icons/blue-arrow-right-thin.svg"
                alt="blue arrow right"
                display="inline-block"
                ml="16px"
              />
            </Link>
          </Flex>
          <Image
            src={howItWorksLink}
            alt="how it works link"
            w={{ base: "350px", md: "unset" }}
          />
        </Flex>

        {/*Steps*/}
        <Flex
          w="1"
          height="80%"
          borderLeftWidth="1px"
          borderStyle="dashed"
          borderColor="neutral.700"
          direction="column"
          justify="space-between"
          position="absolute"
          top="10%"
          left="50%"
          display={{ base: "none", md: "flex" }}
        >
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            1
          </Box>
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            2
          </Box>
          <Box
            w="36px"
            height="36px"
            borderRadius="24px"
            backgroundColor="neutral.0"
            textAlign="center"
            lineHeight="36px"
            verticalAlign="center"
            fontSize="18px"
            transform="translateX(-50%)"
            color={reverseContrastText}
            borderWidth="1px"
            borderColor={reverseContractTextBorder}
          >
            3
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default HowItWorks;