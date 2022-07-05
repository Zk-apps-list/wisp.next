import type { NextPage } from "next";
import {
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";

import { providerOptions } from "../services/WalletConnect";
import Web3Modal from "web3modal";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Landing/Jumbotron";
import HowItWorks from "../components/Landing/HowItWorks";
import WhyWisp from "../components/Landing/WhyWisp";
import { AuthContext } from "../contexts/AuthContext";
import PortfolioPage from "../components/Portfolio/Portfolio";

export let web3Modal: any;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  });
}

export type MenuItem = {
  name: string,
  href: string,
  icon: string
}

const Home: NextPage = () => {
  const { account, isLoading } = useContext(AuthContext);

  const MenuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '#',
      icon: "/icons/home-icon-light.svg"
    },
    {
      name: 'How it works',
      href: '#how-it-works',
      icon: "/icons/settings-icon-light.svg"
    },
    {
      name: 'Why Wisp',
      href: '#why-wisp',
      icon: "/icons/settings-icon-light.svg"
    }
  ];

  return (
    <>
      {isLoading
       ? null
       : account ? (
          <PortfolioPage />
        ) : (
          <Flex
            align="center"
            direction="column"
            backgroundColor="light_neutral.50"
          >
            <Navbar title="Home" menuItems={MenuItems} />
            <Jumbotron />
            <HowItWorks />
            <WhyWisp />
            <Footer bg="neutral.0" />
          </Flex>
        )}
    </>
  );
};

export default Home;
