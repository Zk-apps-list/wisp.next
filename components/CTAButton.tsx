import { Box, Image, Button, Text } from '@chakra-ui/react';
import React from 'react';

const CTAButton = (props: any) => {
  const { name, icon, onClick, responsive } = props;

  return (
    <>
      <Box
        display={{ base: responsive ? "none" : "flex", md: "flex"}}
        as={Button}
        backgroundColor="primary.500"
        borderRadius="6px"
        py="12px"
        px="20px"
        textAlign="center"
        _hover={{ bg: "primary.700" }}
        leftIcon={icon && (
          <Image
            src={icon}
            alt="logo"
            width="16px"
            height="16px"
          />
        )}
        onClick={onClick}
      >
        <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
          {name}
        </Text>
      </Box>
      <Box display={{ base: responsive ? "flex" : "none", md: "none" }} flexDirection="column">
        <Box
          as={Button}
          width="50px"
          height="50px"
          ml="auto"
          mr="auto"
          backgroundColor="primary.500"
          borderRadius="100%"
          textAlign="center"
          _hover={{ bg: "primary.700" }}
          onClick={onClick}
        >
          <Image
            src={icon}
            alt="logo"
            width="40px"
            height="40px"
          />
        </Box>
        <Box mt="8px" textAlign="center" textStyle="app_med_12">
          {name}
        </Box>
      </Box>
    </>
  )
}

export default CTAButton;

