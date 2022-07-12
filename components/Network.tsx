import { Box, Button, Flex, Image, Select, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { chains } from '../util/chains';
import Dropdown, { DropdownObject } from './Dropdown';


const Network = () => {
  const { switchNetwork, chainId } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const items: DropdownObject[] = chains.map(el => {
    return {
      id: el.id,
      title: el.label,
      onClick: () => switchNetwork(Number(el.id))
    }
  });

  const selectedChain = () => chains.find(el => el.id === chainId)?.label;

  const NetworkButton = () => {
    return (
      <Flex
        as={Button}
        backgroundColor="transparent"
        columnGap="8px"
        py="8px"
        px="16px"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex justifyContent="center" alignItems="center">
          <Text color="neutral.800" textStyle="app_med_14">{selectedChain()}</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Image
            src={isOpen ? "/icons/chevron_up.svg" : "/icons/chevron_down.svg"}
            alt="Chevron Down"
            width="16px"
            height="16px"
          />
        </Flex>
      </Flex>
    )
  };

  return (
    <>
      <Box>
        <Dropdown
          button={<NetworkButton />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={items}
        />
      </Box>
    </>
  );
}

export default Network;
