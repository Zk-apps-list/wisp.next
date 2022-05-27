import React from "react";
import { Button, Text } from "@chakra-ui/react";

function TransparentButton({ children, ...rest }) {
  return (
    <Button {...rest} backgroundColor="transparent">
      <Text textStyle="app_reg_12" color="neutral.0">
        {children}
      </Text>
    </Button>
  );
}

export default TransparentButton;
