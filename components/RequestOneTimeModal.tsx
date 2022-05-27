import React, { useState } from 'react';
import { Button, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react';
import { colors } from '../styles/colors';
import { app } from '../styles/fonts';
import Image from 'next/image';

const RequestOneTimeModal = (props: any) => {
  const { isOpen, onClose } = props;

  const [value, setValue] = useState<number | undefined>(undefined);
  const [selectedToken, setSelectedToken] = useState<string | undefined>(undefined);
  const [generatedLink, setGeneratedLink] = useState<string | undefined>(undefined);

  const reset = () => {
    setValue(undefined);
    setSelectedToken(undefined);
    setGeneratedLink(undefined);
  }

  const handleValueChange = (event: any) => setValue(event.target.value);

  const token = (symbol: string) => {
    switch (symbol) {
      case 'ETH':
        return  (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src={require('/assets/icons/eth_logo.svg')} alt='Ethereum Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" {...app.reg_14} ml="8px" mt="2px">Ethereum (ETH)</Text>
          </Box>
        )
      case 'USDC':
        return (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src={require('/assets/icons/usdc_logo.svg')} alt='USDC Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" {...app.reg_14} ml="8px" mt="2px">USDC Coin (USDC)</Text>
          </Box>
        )
      case 'UNI': default:
        return (
          <Box flexDirection="row" display="flex">
            <Box>
              <Image src={require('/assets/icons/uniswap_logo.svg')} alt='Uniswap Logo' width="24px" height="24px" />
            </Box>
            <Text color="white" {...app.reg_14} ml="8px" mt="2px">Uniswap (UNI)</Text>
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
    <ModalContent backgroundColor={colors.block}>
      <ModalHeader {...app.med_18} color="white">Request one time payment</ModalHeader>
      <ModalCloseButton color="white" />
      <ModalBody>
        <Text {...app.reg_12} color="white">Invite to request payment by sharing link</Text>
        <Menu>
          <MenuButton
            as={Button}
            mt="32px"
            width="100%"
            textAlign={'left'}
            color="white"
            backgroundColor={colors.neutral_850}
            _hover={{ bg: colors.neutral_700 }}
            _active={{ bg: colors.neutral_800 }}
            rightIcon={<Image src={require('/assets/icons/chevron_down.svg')} alt='Chevron Down' width="16px" height="16px" />}
          >
            {!!selectedToken ? token(selectedToken) : 'Select Token'}
          </MenuButton>
          <MenuList backgroundColor={colors.neutral_850} borderWidth="0px">
            <MenuItem _hover={{ bg: colors.neutral_700 }} _focus={{ bg: colors.neutral_800 }} onClick={() => setSelectedToken('ETH')}>{token('ETH')}</MenuItem>
            <MenuItem _hover={{ bg: colors.neutral_700 }} _focus={{ bg: colors.neutral_800 }} onClick={() => setSelectedToken('USDC')}>{token('USDC')}</MenuItem>
            <MenuItem _hover={{ bg: colors.neutral_700 }} _focus={{ bg: colors.neutral_800 }} onClick={() => setSelectedToken('UNI')}>{token('UNI')}</MenuItem>
          </MenuList>
        </Menu>

        <Input
          mt="16px"
          value={value}
          placeholder='0'
          color="white"
          borderWidth="0px"
          backgroundColor={colors.neutral_850}
          isDisabled={!selectedToken}
          onChange={handleValueChange}
        />

        <Text mt="8px" {...app.reg_12} color={colors.neutral_500}>~ 0 USD</Text>
      </ModalBody>

      <ModalFooter>
        {!!generatedLink ? (
          <Box width="100%" p="8px" borderWidth="1px" borderRadius="6px" display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src={require('/assets/icons/lock.svg')} alt='Lock' width="20px" height="20px" />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Text {...app.reg_12}>{`${generatedLink.substring(0,40)}...`}</Text>
            </Box>
            <Box>
              <Box
                as={Button}
                borderRadius="6px"
                backgroundColor={colors.primary_800}
                leftIcon={<Image src={require('/assets/icons/copy.svg')} alt='Copy' width="16px" height="16px" />}
                color="white"
                _hover={{ bg: colors.primary_700 }}
                {...app.reg_14}
                onClick={() => {
                  navigator.clipboard.writeText(generatedLink);
                  // TODO: Toast copied to clipboard
                }}
              >
                Copy
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            as={Button}
            backgroundColor={colors.primary_800}
            borderRadius="6px"
            py="12px"
            width="100%"
            textAlign="center"
            leftIcon={<Image src={require('/assets/icons/chain.svg')} alt='Chevron Down' width="16px" height="16px" />}
            _hover={{ bg: colors.primary_700 }}
            color="white"
            {...app.reg_14}
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