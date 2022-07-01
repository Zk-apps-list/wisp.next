import React, { useState } from 'react';
import {
  Button,
  Box,
  Image,
  Text
} from "@chakra-ui/react";
import RequestOneTimeModal from "./RequestOneTimeModal";
import RequestPermanentLink from './RequestPermanentLink';

const Request = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOneTimeModalOpen, setIsOneTimeModalOpen] = useState(false);
  const [isPermanentLinkModalOpen, setIsPermanentLinkModalOpen] = useState(false);

  return (
    <>
      <RequestOneTimeModal isOpen={isOneTimeModalOpen} onClose={() => setIsOneTimeModalOpen(false)} />
      <RequestPermanentLink isOpen={isPermanentLinkModalOpen} onClose={() => setIsPermanentLinkModalOpen(false)} />
      <Box
        as={Button}
        backgroundColor="primary.800"
        borderRadius="6px"
        py="12px"
        textAlign="center"
        position="relative"
        leftIcon={
          <Image
            src="icons/chain.svg"
            alt="Ethereum Logo"
            width="16px"
            height="16px"
          />
        }
        _hover={{ bg: "primary.700" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">
          Request
        </Text>
      </Box>
      {isOpen && (
        <Box
          position="absolute"
          mt="16px"
          borderWidth="1px"
          borderColor="neutral.100"
          borderRadius="6px"
          backgroundColor="neutral.0"
        >
          <Box
            py="10px"
            px="12px"
            textStyle="app_reg_12"
            color="neutral.800"
            borderBottomWidth="1px"
            borderColor="neutral.100"
            overflow="hidden"
            _hover={{ bg: "neutral.100", cursor: "pointer" }}
            onClick={() => {
              setIsOneTimeModalOpen(true);
              setIsOpen(false);
            }}
          >One time request</Box>
          <Box
            py="10px"
            px="12px"
            textStyle="app_reg_12"
            color="neutral.800"
            overflow="hidden"
            _hover={{ bg: "neutral.100", cursor: "pointer" }}
            onClick={() => {
              setIsPermanentLinkModalOpen(true);
              setIsOpen(false);
            }}
          >Permanent link</Box>
        </Box>
      )}
    </>
  )
}

export default Request;