import type { NextPage } from "next";
import {
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useState } from "react";

import { providerOptions } from "../services/WalletConnect";
import Web3Modal from "web3modal";
import { useColor } from "../hooks/useColor";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Landing/Jumbotron";
import HowItWorks from "../components/Landing/HowItWorks";
import WhyWisp from "../components/Landing/WhyWisp";

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
  const { landingBG, blocks, homeIcon, settingsIcon } = useColor();

  const MenuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '#',
      icon: homeIcon
    },
    {
      name: 'How it works',
      href: '#how-it-works',
      icon: settingsIcon
    },
    {
      name: 'Why Wisp',
      href: '#why-wisp',
      icon: settingsIcon
    }
  ]

  return (
    <Flex
      align="center"
      direction="column"
      paddingTop="24px"
      backgroundColor={landingBG}
    >
      <Navbar title="Home" menuItems={MenuItems} />
      <Jumbotron />
      <HowItWorks />
      <WhyWisp />
      <Footer bg={blocks} />
    </Flex>
  );
};

export default Home;
