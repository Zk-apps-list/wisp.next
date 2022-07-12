import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export interface DropdownObject {
  id: string;
  title: string;
  onClick: () => void;
}

type DropdownProps = {
  button: JSX.Element;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: DropdownObject[];
}

const Dropdown = (props: DropdownProps) => {
  const { isOpen, setIsOpen, items, button } = props;

  return (
    <>
      {button}
      {isOpen && (
        <Box
          position="absolute"
          mt="8px"
          borderWidth="1px"
          borderColor="neutral.100"
          borderRadius="6px"
          backgroundColor="neutral.0"
          zIndex={1}
        >
          {items.map(el => {
            return (
              <Box
                key={el.id}
                py="10px"
                px="12px"
                textStyle="app_reg_12"
                color="neutral.800"
                borderBottomWidth="1px"
                borderColor="neutral.100"
                overflow="hidden"
                _hover={{ bg: "neutral.100", cursor: "pointer" }}
                onClick={() => {
                  el.onClick();
                  setIsOpen(false);
                }}
              >{el.title}</Box>
            )
          })}
        </Box>
      )}
    </>
  )
}

export default Dropdown;