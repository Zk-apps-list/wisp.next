import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useContext } from "react";

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
  path: string,
  icon: string,
  iconLight: string
}

const LandingPageMenuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/#",
    icon: "/icons/home-icon.svg",
    iconLight: "/icons/home-icon-light.svg"
  },
  {
    name: "How it works",
    path: "/#how-it-works",
    icon: "/icons/rocket-icon.svg",
    iconLight: "/icons/rocket-icon-light.svg"
  },
  {
    name: "Why Wisp",
    path: "/#why-wisp",
    icon: "/icons/settings-icon.svg",
    iconLight: "/icons/settings-icon-light.svg"
  }
];

// export const Color1 = "#ee7752";
// export const Color2 = "#e73c7e ";
// export const Color3 = "#23a6d5";
// export const Color4 = "#23d5ab";

export const Color1 = "#385CD9";
export const Color2 = "#147BDA ";
export const Color3 = "#0B2DA2";
export const Color4 = "#3C96EA";

const Home: NextPage = () => {
  const { account, isLoading } = useContext(AuthContext);

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
            backgroundColor="neutral.0"
          >
            <Navbar
              title="Home"
              menuItems={LandingPageMenuItems}
              isMobileOnly={false}
              isLandingPage
            />
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
