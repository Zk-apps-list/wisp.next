import { Box, Image, Button, Text } from '@chakra-ui/react';
import React from 'react';

const CTAButton = (props: any) => {
  const { name, icon, onClick } = props;

  return (
    <Box
      as={Button}
      backgroundColor="primary.500"
      borderRadius="6px"
      py="12px"
      px="20px"
      textAlign="center"
      _hover={{ bg: "primary.700" }}
      leftIcon={
        <Image
          src={icon}
          alt="logo"
          width="16px"
          height="16px"
        />
      }
      onClick={onClick}
    >
      <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
        {name}
      </Text>
    </Box>
  )
}

export default CTAButton;

