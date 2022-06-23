import React, { useContext, useState } from "react";
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
import Wallet from "./Wallet";
import { AuthContext } from "../contexts/AuthContext";
import CreateALink from "./CreateALink";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { account, connectWallet, disconnect, isWalletLoading } =
    useContext(AuthContext);

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
      px="32px"
      display={{ base: "none", sm: "flex" }}
      flexDirection="row"
      justifyContent="start"
    >
      <Text color={textColor} textStyle="app_med_28">
        {title()}
      </Text>
      <Wallet
        account={account}
        connectWallet={connectWallet}
        disconnect={disconnect}
        isLoading={isWalletLoading}
      />
      <Box display="flex" flexDirection="row" ml="auto">
        <CreateALink />
      </Box>
      <Button
        ml="16px"
        backgroundColor={blockColor}
        _hover={{ bg: addressHoverBG }}
        onClick={toggleColorMode}
      >
        <Image src={lightToggle} />
      </Button>
    </Box>
  );
};

export default Header;
