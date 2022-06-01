import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AuthContextProvider } from "../contexts/AuthContext";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Head>
          <title>Wisp Finance</title>
        </Head>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
