import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme, { ethereumTheme, polygonTheme } from "../styles/theme";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";
import { TransactionContextProvider } from "../contexts/TransactionContext";
import Head from 'next/head'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useContext, useState } from "react";
import defaultTheme from "../styles/theme";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uladandrew/wisp-subgraph",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <TransactionContextProvider>
          <ThemeSwitch Component={Component} pageProps={pageProps} />
        </TransactionContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
}

const ThemeSwitch = (props: any) => {
  const { Component, pageProps } = props;
  const { chainId } = useContext(AuthContext);

  const theme = 
    chainId === "1"
      ? ethereumTheme
      : chainId === "137"
        ? polygonTheme
        : defaultTheme;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Wisp Finance</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
