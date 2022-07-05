import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { Token, tokens } from "../../util/tokens";
import { generateOneTimeLinkPath } from "../../util/linkPathCodec";

const RequestOneTimeModal = (props: any) => {
  const { isOpen, onClose } = props;

  const [value, setValue] = useState<number | undefined>(undefined);
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined
  );
  const [generatedLink, setGeneratedLink] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const resetFields = () => {
    setValue(undefined);
    setSelectedToken(undefined);
  };

  const closeTooltip = () => setTimeout(() => setIsCopied(false), 3000);

  const handleValueChange = (event: any) => setValue(event.target.value);

  const token = (token: Token) => {
    return (
      <Box flexDirection="row" display="flex">
        <Box>
          <Image
            src={`icons/${token.symbol.toLowerCase()}_logo.svg`}
            alt={`${token.name} Logo`}
            width="24px"
            height="24px"
          />
        </Box>
        <Text color="light_neutral.800" textStyle="app_reg_14" ml="8px" mt="2px">
          {token.name + ` (${token.symbol})`}
        </Text>
      </Box>
    );
  };

  const generateLink = async () => {
    if (!selectedToken || !value) {
      return;
    }
    const sharedKeypairObj = JSON.parse(localStorage.getItem("sharedKeypair") as string);

    setIsLoading(true);
    const amount = ethers.utils.parseEther(value.toString());
    const path = await generateOneTimeLinkPath(sharedKeypairObj, amount, selectedToken.address);
    setGeneratedLink(window.location.origin + "/pay/" + path);
    resetFields();
    setIsLoading(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        resetFields();
        setGeneratedLink(undefined);
      }}
    >
      <ModalOverlay />
      <ModalContent backgroundColor="light_neutral.100" pb="12px">
        <ModalHeader textStyle="app_med_18" color="light_neutral.800">
          Request one time payment
        </ModalHeader>
        <ModalCloseButton color="light_neutral.800" />
        <ModalBody>
          <Text textStyle="app_reg_12" color="light_neutral.800">
            Invite to request payment by sharing link
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              mt="32px"
              width="100%"
              textAlign={"left"}
              color="light_neutral.800"
              backgroundColor="light_neutral.0"
              _hover={{ bg: "light_neutral.50" }}
              _active={{ bg: "neutral_800" }}
              rightIcon={
                <Image
                  src="/icons/chevron_down.svg"
                  alt="Chevron Down"
                  width="16px"
                  height="16px"
                />
              }
            >
              {!!selectedToken ? token(selectedToken) : "Select Token"}
            </MenuButton>
            <MenuList backgroundColor="light_neutral.0" borderWidth="0px">
              {
                tokens.map(it => {
                  return (
                    <MenuItem
                      key={it.address}
                      _hover={{ bg: "light_neutral.50" }}
                      _focus={{ bg: "neutral_800" }}
                      onClick={() => setSelectedToken(it)}
                    >
                      { token(it) }
                    </MenuItem>
                  );
                })
              }
            </MenuList>
          </Menu>

          <Input
            mt="16px"
            value={value}
            placeholder="0"
            color="light_neutral.800"
            borderWidth="0px"
            backgroundColor="light_neutral.0"
            isDisabled={!selectedToken}
            onChange={handleValueChange}
          />
          {/* TODO: Add conversion to USD */}
          {/* <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
            ~ 0 USD
          </Text> */}

          <Box
            as={Button}
            mt={"16px"}
            backgroundColor="primary.800"
            borderRadius="6px"
            py="12px"
            width="100%"
            textAlign="center"
            leftIcon={
              <Image
                src="icons/chain.svg"
                alt="Chevron Down"
                width="16px"
                height="16px"
              />
            }
            _hover={{ bg: "primary.700" }}
            color="neutral.0"
            textStyle="app_reg_14"
            isDisabled={!selectedToken || !value}
            isLoading={isLoading}
            onClick={generateLink}
          >
            Generate link to request payment
          </Box>

          {!!generatedLink && (
            <Box
              mt={"16px"}
              width="100%"
              p="8px"
              borderWidth="1px"
              borderRadius="6px"
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="icons/lock.svg"
                  alt="Lock"
                  width="20px"
                  height="20px"
                />
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Text
                  textStyle="app_reg_12"
                  color="light_neutral.800"
                >{`${generatedLink?.substring(0, 40)}...`}</Text>
              </Box>
              <Tooltip
                label="Copied"
                placement="top"
                hasArrow
                arrowSize={8}
                offset={[0, 15]}
                isOpen={isCopied}
                onOpen={closeTooltip}
              >
                <Box
                  as={Button}
                  borderRadius="6px"
                  backgroundColor="primary.800"
                  leftIcon={
                    <Image
                      src="icons/copy.svg"
                      alt="Copy"
                      width="16px"
                      height="16px"
                    />
                  }
                  color="neutral.0"
                  _hover={{ bg: "primary.700" }}
                  textStyle="app_reg_14"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink);
                    setIsCopied(true);
                  }}
                >
                  Copy
                </Box>
              </Tooltip>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RequestOneTimeModal;
