import React, { useState } from "react";
import {
  Button,
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { Token, tokens } from "../util/tokens";
import { useColor } from "../hooks/useColor";

const RequestOneTimeModal = (props: any) => {
  const { isOpen, onClose } = props;

  const [value, setValue] = useState<number | undefined>(undefined);
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined
  );
  const [generatedLink, setGeneratedLink] = useState<string | undefined>(
    undefined
  );
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const { blockColor, textColor, inputColor, inputHover, chevronIcon } = useColor();

  const reset = () => {
    setValue(undefined);
    setSelectedToken(undefined);
    setGeneratedLink(undefined);
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
        <Text color={textColor} textStyle="app_reg_14" ml="8px" mt="2px">
          {token.name + ` (${token.symbol})`}
        </Text>
      </Box>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
    >
      <ModalOverlay />
      <ModalContent backgroundColor={blockColor}>
        <ModalHeader textStyle="app_med_18" color={textColor}>
          Request one time payment
        </ModalHeader>
        <ModalCloseButton color={textColor} />
        <ModalBody>
          <Text textStyle="app_reg_12" color={textColor}>
            Invite to request payment by sharing link
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              mt="32px"
              width="100%"
              textAlign={"left"}
              color={textColor}
              backgroundColor={inputColor}
              _hover={{ bg: inputHover }}
              _active={{ bg: "neutral_800" }}
              rightIcon={
                <Image
                  src={chevronIcon}
                  alt="Chevron Down"
                  width="16px"
                  height="16px"
                />
              }
            >
              {!!selectedToken ? token(selectedToken) : "Select Token"}
            </MenuButton>
            <MenuList backgroundColor={inputColor} borderWidth="0px">
              {
                tokens.map(it => {
                  return (
                    <MenuItem
                      key={it.address}
                      _hover={{ bg: inputHover }}
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
            color={textColor}
            borderWidth="0px"
            backgroundColor={inputColor}
            isDisabled={!selectedToken}
            onChange={handleValueChange}
          />

          <Text mt="8px" textStyle="app_reg_12" color="neutral.500">
            ~ 0 USD
          </Text>
        </ModalBody>

        <ModalFooter>
          {!!generatedLink ? (
            <Box
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
                  color={textColor}
                >{`${generatedLink.substring(0, 40)}...`}</Text>
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
          ) : (
            <Box
              as={Button}
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
              onClick={() =>
                setGeneratedLink(
                  "https://www.wisp.finance/28gdf93jf9dsfDjdf9gfFIQPWmpoqpmIekfdE8q013985De5"
                )
              }
            >
              Generate link to request payment
            </Box>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestOneTimeModal;
