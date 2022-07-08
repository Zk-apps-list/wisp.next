import React, { useState } from 'react';
import {
  Button,
  Box,
  Image,
  Text
} from "@chakra-ui/react";
import RequestOneTimeModal from "./Modal/RequestOneTimeModal";
import RequestPermanentLink from "./Modal/RequestPermanentLinkModal";
import CTAButton from './CTAButton';

const Request = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOneTimeModalOpen, setIsOneTimeModalOpen] = useState(false);
  const [isPermanentLinkModalOpen, setIsPermanentLinkModalOpen] = useState(false);

  return (
    <>
      <RequestOneTimeModal isOpen={isOneTimeModalOpen} onClose={() => setIsOneTimeModalOpen(false)} />
      <RequestPermanentLink isOpen={isPermanentLinkModalOpen} onClose={() => setIsPermanentLinkModalOpen(false)} />
      <CTAButton
        name="Request"
        icon="/icons/arrow_left.svg"
        responsive
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Box
          position="absolute"
          mt="8px"
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