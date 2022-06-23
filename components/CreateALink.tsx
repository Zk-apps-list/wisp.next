import React, { useState } from 'react';
import {
  Button,
  Box,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/react";
import RequestOneTimeModal from "./RequestOneTimeModal";

const CreateALink = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RequestOneTimeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Box
        as={Button}
        backgroundColor="primary.800"
        borderRadius="6px"
        py="12px"
        textAlign="center"
        leftIcon={
          <Image
            src="icons/chain.svg"
            alt="Ethereum Logo"
            width="16px"
            height="16px"
          />
        }
        _hover={{ bg: "primary.700" }}
        onClick={() => setIsOpen(true)}
      >
        <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
          Create a Link
        </Text>
      </Box>
    </>
  )
}

export default CreateALink;