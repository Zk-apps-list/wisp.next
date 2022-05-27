import React from "react";
import { Button, Text } from "@chakra-ui/react";

function BlueButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
      backgroundColor="linear-gradient(260.06deg, #1493DA -43.71%, #1169C8 141.46%)"
    >
      <Text textStyle="app_reg_12" color="neutral.0">
        {children}
      </Text>
    </Button>
  );
}

export default BlueButton;
