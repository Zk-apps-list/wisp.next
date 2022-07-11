import { Button, Select, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { chains } from '../util/chains';

const Network = () => {
  const { switchNetwork, chainId } = useContext(AuthContext);

  // const [network, setNetwork] = useState<number | undefined>(undefined);

  const handleNetwork = (e) => {
    const id = e.target.value;
    // setNetwork(Number(id));
    switchNetwork(Number(id))
  };

  return (
    <VStack>
      {/* <Button onClick={() => switchNetwork(network)} isDisabled={!network}>
        Switch Network
      </Button> */}
      <Select onChange={handleNetwork} value={chainId}>
        {chains.map((chain) => {
          return (
            <option key={chain.id} value={chain.id}>
              {chain.label}
            </option>
          );
        })}
      </Select>
    </VStack>
  );
}

export default Network;
