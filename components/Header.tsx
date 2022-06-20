import React, { useState } from "react";
import {
  Button,
  Box,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import RequestOneTimeModal from "./RequestOneTimeModal";
import { useColor } from "../hooks/useColor";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const { textColor, blockColor, addressHoverBG, chevronIcon, lightToggle} = useColor();

  const title = () => {
    switch (pathname) {
      case "/overview":
        return "Overview";
      case "/transactions":
      default:
        return "Transactions";
    }
  };

  return (
    <Box
      py="32px"
      px="64px"
      display="flex"
      flexDirection="row"
      justifyContent="start"
    >
      <Box>
        <Text color={textColor} textStyle="app_med_28">
          {title()}
        </Text>
      </Box>
      <Box display="flex" flexDirection="row" ml="auto">
        <Box>
          <Box
            as={Button}
            backgroundColor="primary.800"
            borderRadius="6px"
            py="12px"
            textAlign="center"
            ml="36px"
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
        </Box>
        <Box
          as={Button}
          color={textColor}
          px="16px"
          py="8px"
          ml="16px"
          backgroundColor={blockColor}
          borderRadius="6px"
          rightIcon={
            <Image
              src={chevronIcon}
              alt="Chevron Down"
              width="16px"
              height="16px"
            />
          }
          _hover={{ bg: addressHoverBG }}
          textStyle="app_reg_14"
        >
          0xa0223x...49fv859
        </Box>
      </Box>
      <Button
        ml="16px"
        backgroundColor={blockColor}
        _hover={{ bg: addressHoverBG }}
        onClick={toggleColorMode}
      >
        <Image src={lightToggle} />
      </Button>
      <RequestOneTimeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default Header;
