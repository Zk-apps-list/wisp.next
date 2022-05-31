import React, { useState } from 'react';
import { Button, Box, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Menu, MenuButton, MenuList, MenuItem, Input, Tooltip } from '@chakra-ui/react';

const RequestOneTimeModal = (props: any) => {
  const { isOpen, onClose } = props;

  const [value, setValue] = useState<number | undefined>(undefined);
  const [selectedToken, setSelectedToken] = useState<string | undefined>(undefined);
  const [generatedLink, setGeneratedLink] = useState<string | undefined>(undefined);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const reset = () => {
    setValue(undefined);
    setSelectedToken(undefined);
    setGeneratedLink(undefined);
  }

  const closeTooltip = () => setTimeout(() => setIsCopied(false), 3000);

  const handleValueChange = (event: any) => setValue(event.target.value);

  const token = (symbol: string) => {
    switch (symbol) {
      case 'ETH':
        return  (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src='icons/eth_logo.svg' alt='Ethereum Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" textStyle="app_reg_14" ml="8px" mt="2px">Ethereum (ETH)</Text>
          </Box>
        )
      case 'USDC':
        return (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src='icons/usdc_logo.svg' alt='USDC Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" textStyle="app_reg_14" ml="8px" mt="2px">USDC Coin (USDC)</Text>
          </Box>
        )
      case 'UNI': default:
        return (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src='icons/uniswap_logo.svg' alt='Uniswap Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" textStyle="app_reg_14" ml="8px" mt="2px">Uniswap (UNI)</Text>
          </Box>
        )
    }
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
    <ModalContent backgroundColor="block">
      <ModalHeader textStyle="app_med_18" color="white">Request one time payment</ModalHeader>
      <ModalCloseButton color="white" />
      <ModalBody>
        <Text textStyle="app_reg_12" color="white">Invite to request payment by sharing link</Text>
        <Menu>
          <MenuButton
            as={Button}
            mt="32px"
            width="100%"
            textAlign={'left'}
            color="white"
            backgroundColor="neutral.800"
            _hover={{ bg: "neutral.700" }}
            _active={{ bg: "neutral_800" }}
            rightIcon={<Image src='icons/chevron_down.svg' alt='Chevron Down' width="16px" height="16px" />}
          >
            {!!selectedToken ? token(selectedToken) : 'Select Token'}
          </MenuButton>
          <MenuList backgroundColor="neutral.800" borderWidth="0px">
            <MenuItem _hover={{ bg: "neutral.700" }} _focus={{ bg: "neutral_800" }} onClick={() => setSelectedToken('ETH')}>{token('ETH')}</MenuItem>
            <MenuItem _hover={{ bg: "neutral.700" }} _focus={{ bg: "neutral_800" }} onClick={() => setSelectedToken('USDC')}>{token('USDC')}</MenuItem>
            <MenuItem _hover={{ bg: "neutral.700" }} _focus={{ bg: "neutral_800" }} onClick={() => setSelectedToken('UNI')}>{token('UNI')}</MenuItem>
          </MenuList>
        </Menu>

        <Input
          mt="16px"
          value={value}
          placeholder='0'
          color="white"
          borderWidth="0px"
          backgroundColor="neutral.800"
          isDisabled={!selectedToken}
          onChange={handleValueChange}
        />

        <Text mt="8px" textStyle="app_reg_12" color="neutral.500">~ 0 USD</Text>
      </ModalBody>

      <ModalFooter>
        {!!generatedLink ? (
          <Box width="100%" p="8px" borderWidth="1px" borderRadius="6px" display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src='icons/lock.svg' alt='Lock' width="20px" height="20px" />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Text textStyle="app_reg_12" color="white">{`${generatedLink.substring(0,40)}...`}</Text>
            </Box>
            <Tooltip label='Copied' placement='top' hasArrow arrowSize={8} offset={[0,15]} isOpen={isCopied} onOpen={closeTooltip}>
              <Box
                as={Button}
                borderRadius="6px"
                backgroundColor="primary.800"
                leftIcon={<Image src='icons/copy.svg' alt='Copy' width="16px" height="16px" />}
                color="white"
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
            leftIcon={<Image src='icons/chain.svg' alt='Chevron Down' width="16px" height="16px" />}
            _hover={{ bg: "primary.700" }}
            color="white"
            textStyle="app_reg_14"
            isDisabled={!selectedToken || !value}
            onClick={() => setGeneratedLink('https://www.wisp.finance/28gdf93jf9dsfDjdf9gfFIQPWmpoqpmIekfdE8q013985De5')}
          >
            Generate link to request payment
          </Box>
        )}
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default RequestOneTimeModal;