import type { NextPage } from "next";
import {
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useState } from "react";

import { providerOptions } from "../services/WalletConnect";
import Web3Modal from "web3modal";
import { useColor } from "../hooks/useColor";
import Menu from "../components/Menu";
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

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('HOME');

  const {
    landingBG,
    blocks,
  } = useColor();

  return (
    <Flex
      align="center"
      direction="column"
      paddingTop="24px"
      backgroundColor={landingBG}
    >
      <Menu
        showMenu={true}
        menu={menu}
        setMenu={setMenu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Jumbotron />
      <HowItWorks />
      <WhyWisp />
      <Footer bg={blocks} />
    </Flex>
  );
};

export default Home;
