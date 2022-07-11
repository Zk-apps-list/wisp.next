import { Box, Image  } from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router'
import PaymentPermanent from "../../components/Payment/PaymentPermanent";
import PaymentOneTime from "../../components/Payment/PaymentOneTime";
import Network from "../../components/Network";

const Request = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Box backgroundColor="light_neutral.100" height="100vh">
      <Box width= "200px" ml="auto">
        <Network />
      </Box>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Box display="flex" justifyContent="center">
            <Image src="/icons/logo-md.svg" alt="logo" width="72px" height="45px"/>
          </Box>
          <Box
            width="400px"
            backgroundColor="light_neutral.100"
            borderRadius="6px"
            mt="32px"
          >
            {
              id && (id as string).length === 128 ?
                <PaymentPermanent id={id as string}/> :
                <PaymentOneTime id={id as string}/>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Request;
