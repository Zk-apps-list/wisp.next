import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Web3Modal from 'web3modal';
import theme from "../styles/theme";
import WalletConnect from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Wisp",
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY
    }
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY
    }
  }
};

export let web3Modal: any;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
