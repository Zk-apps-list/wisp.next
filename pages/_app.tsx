import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AuthContextProvider } from "../contexts/AuthContext";
import Head from 'next/head'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uladandrew/wisp-subgraph",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <ApolloProvider client={client}>
          <Head>
            <title>Wisp Finance</title>
          </Head>
          <Component {...pageProps} />
        </ApolloProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
