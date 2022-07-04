import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useColor } from "../hooks/useColor";
import { generatePermanentLinkPath } from "../util/linkPathCodec";

const RequestPermanentLink = (props: any) => {
  const { isOpen, onClose } = props;

  const [generatedLink, setGeneratedLink] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const { blockColor, textColor, inputColor, inputHover, chevronIcon } = useColor();

  const closeTooltip = () => setTimeout(() => setIsCopied(false), 3000);

  const generateLink = async () => {
    const sharedKeypairObj = JSON.parse(localStorage.getItem("sharedKeypair") as string);

    setIsLoading(true);
    setGeneratedLink(window.location.origin + "/pay/" + generatePermanentLinkPath(sharedKeypairObj));
    setIsLoading(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setGeneratedLink(undefined);
      }}
    >
      <ModalOverlay/>
      <ModalContent backgroundColor={blockColor} pb="12px">
        <ModalHeader textStyle="app_med_18" color={textColor}>
          Permanent Link
        </ModalHeader>
        <ModalCloseButton color={textColor}/>
        <ModalBody>
          <Text textStyle="app_reg_12" color={textColor}>
            Create a permanent payment link
          </Text>

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
                  color={textColor}
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

export default RequestPermanentLink;
