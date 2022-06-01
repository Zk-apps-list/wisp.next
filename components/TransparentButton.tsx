import React from "react";
import { Button, Text } from "@chakra-ui/react";

const TransparentButton = (props: any) => {
  const { children, ...rest } = props;

  return (
    <Button {...rest} background="transparent">
      <Text textStyle="app_reg_12" color="neutral.0">
        {children}
      </Text>
    </Button>
  );
}

export default TransparentButton;
