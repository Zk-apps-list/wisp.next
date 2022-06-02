import React from "react";
import { Button, Text } from "@chakra-ui/react";

// @ts-ignore
function TransparentButton({ color, children, ...rest }) {
  return (
    <Button {...rest} background="transparent">
      <Text textStyle="app_reg_12" color={color}>
        {children}
      </Text>
    </Button>
  );
}

export default TransparentButton;
