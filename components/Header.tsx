import React, { useContext, useState } from "react";
import {
  Button,
  Box,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useColor } from "../hooks/useColor";
import { AuthContext } from "../contexts/AuthContext";
import { truncateWallet } from "../util/truncateWallet";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const { account} = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const { textColor, blockColor, addressHoverBG, chevronIcon, lightToggle} = useColor();

  const title = () => {
    switch (pathname) {
      case "/":
        return "Portfolio";
      case "/transactions":
      default:
        return "Transactions";
    }
  };

  return (
    <Box
      p="32px"
      display={{ base: "none", sm: "flex" }}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Text color={textColor} textStyle="app_bold_28">
        {title()}
      </Text>
      {account && <Text color="neutral.800" textStyle="app_med_14" mt="10px">{truncateWallet(account, 6)}</Text>}
    </Box>
  );
};

export default Header;
