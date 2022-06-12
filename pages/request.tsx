import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import Wallet from "../components/Wallet";
import { AuthContext } from "../contexts/AuthContext";
import { text } from "stream/consumers";

const Request = () => {
  const { account, connectWallet, disconnect, isWalletLoading } =
    useContext(AuthContext);

  const requestBG = useColorModeValue("light_neutral.100", "background.end");
  const logo = useColorModeValue(
    "icons/logo-md-light.svg",
    "icons/logo-md.svg"
  );
  const textColor = useColorModeValue("light_neutral.800", "white");
  const blockColor = useColorModeValue("light_neutral.0", "block");

  return (
    <Box backgroundColor={requestBG} height="100vh">
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Box display="flex" justifyContent="center">
            <Image src={logo} alt="logo" />
          </Box>
          <Box
            p="24px"
            width="400px"
            backgroundColor={blockColor}
            borderRadius="6px"
            mt="32px"
          >
            <Box>
              <Text color={textColor} textStyle="app_med_18" textAlign="center">
                Connect your wallet to pay
              </Text>
            </Box>
            <Box mt="12px">
              <Text
                color="neutral.500"
                textStyle="app_reg_12"
                textAlign="center"
              >{`By connecting your wallet, you agree to Wisp's Terms, Privacy Policy, and Community Standards.`}</Text>
            </Box>
            <Box mt="32px" textAlign="center">
              <Wallet
                account={account}
                connectWallet={connectWallet}
                disconnect={disconnect}
                isLoading={isWalletLoading}
                ml="0"
              />
            </Box>
            <Box mt="32px" textAlign="center">
              <Text color={textColor} textStyle="app_reg_14">
                New to crypto?
                <Text as="span" ml="5px" color="primary.700">
                  Learn more about wallets.
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Request;
