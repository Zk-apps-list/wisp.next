import React, { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RequestOneTimeModal from './RequestOneTimeModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const title = () => {
    switch (pathname) {
      case '/overview':
        return 'Overview';
      case '/transactions': default:
        return 'Transactions';
    }
  }

  return (
    <Box py="32px" px="64px" display="flex" flexDirection="row" justifyContent="space-between">
      <Box>
        <Text color="white" textStyle="app_med_28">{title()}</Text>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <Box as={Button}
            backgroundColor="primary.800"
            borderRadius="6px"
            py="12px"
            textAlign="center"
            ml="36px"
            leftIcon={<Image src={require('/assets/icons/chain.svg')} alt='Ethereum Logo' width="16px" height="16px" />}
            _hover={{ bg: "primary.700" }}
            onClick={() => setIsOpen(true)}
          >
              <Text ml="auto" mr="auto" color="white" textStyle="app_reg_14">Create a Link</Text>
          </Box>
        </Box>
        <Box
          as={Button}
          color="white"
          px="16px"
          py="8px"
          ml="16px"
          backgroundColor="block"
          borderRadius="6px"
          rightIcon={<Image src={require('/assets/icons/chevron_down.svg')} alt='Chevron Down' width="16px" height="16px" />}
          _hover={{ bg: "neutral.800" }}
          textStyle="app_reg_14"
        >
            0xa0223x...49fv859
        </Box>
      </Box>

      <RequestOneTimeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  )
}

export default Header;