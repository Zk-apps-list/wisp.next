import React from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useColor } from '../../hooks/useColor';

const Jumbotron = () => {
  const { landingPhones, contrastText, dimText } = useColor();

  return (
    <>
      <Flex mt="138px">
        <Text
          maxWidth="800px"
          mx="24px"
          textStyle={{ base: "land_reg_35", md: "land_reg_56" }}
          textAlign="center"
          color={contrastText}
        >
            Turn your <Box as="span" fontWeight="medium">public wallet</Box><br />into {" "}
          <Box as="span" fontWeight="medium">
            a private bank.
          </Box>
        </Text>
      </Flex>
      <Flex mt="32px">
        <Text
          maxWidth="600px"
          textStyle="land_light_14_200"
          textAlign="center"
          color={dimText}
          mx="30px"
        >
          Wisp Finance is the easiest, safest, and fastest way to request secure and private payment using cryptocurrency without revealing your wallet address.
        </Text>
      </Flex>
      <Box overflow="hidden" mt="56px" width="100%">
        <Image
          src={landingPhones}
          alt="jumbotron image"
          width={{
            base: "875px",
            sm: "875px",
            md: "1400px",
            lg: "1400px",
            xl: "1400px",
            xxl: "1582px",
          }}
          maxW="none"
          transform={{ base: "translateX(-35%)", sm: "translateX(-50%)" }}
          left="50%"
          objectFit="contain"
          position="relative"
        />
      </Box>
    </>
  )
}

export default Jumbotron;