import React from 'react';
import {
  useColorModeValue,
} from "@chakra-ui/react";

export const useColor = () => {
  /*
   * Colors
  */
  const requestBG = useColorModeValue("light_neutral.100", "background.end");
  const landingBG = useColorModeValue( "light_neutral.50", "landingBG");
  const navigationBG = useColorModeValue("neutral.0", "block");
  const contrastText = useColorModeValue("light_neutral.800", "neutral.0");
  const menuText = useColorModeValue("light_neutral.800", "neutral.0");
  const selectedMenuText = useColorModeValue("light_neutral.800", "neutral.500");
  const reverseContrastText = useColorModeValue("light_neutral.800", "neutral.800");
  const reverseContractTextBorder = useColorModeValue("light_neutral.200", "transparent");
  const dimText = useColorModeValue("light_neutral.600", "neutral.400",);
  const blocks = useColorModeValue("neutral.0", "block");
  const whyWispBackground = useColorModeValue("light_neutral.100", "block");
  const whyWispText = useColorModeValue("light_neutral.500", "neutral.0");
  const blockColor = useColorModeValue("light_neutral.100", "block");
  const textColor = useColorModeValue("light_neutral.800", "light_neutral.0");
  const inputColor = useColorModeValue("light_neutral.0", "neutral.800");
  const inputHover = useColorModeValue("light_neutral.50", "neutral.700");
  const buttonBg = useColorModeValue("light_neutral.50", "neutral.800");
  const addressHoverBG = useColorModeValue("light_neutral.100", "neutral.800");
  const overviewBG = useColorModeValue("light_neutral.50", "background.start");
  const borderColor = useColorModeValue("light_neutral.200", "light_neutral.800");
  const transactionsBG = useColorModeValue("light_neutral.50", "background.start");

  /*
   * Images
  */
  const landingPhones = useColorModeValue("/images/landing-phones-light.png", "/images/landing-phones.png");
  const logoMd = useColorModeValue("/icons/logo-md-light.svg", "/icons/logo-md.svg");
  const logoSm = useColorModeValue("/icons/logo-sm-light.svg", "/icons/logo-sm.svg");
  const lightToggle = useColorModeValue("/icons/icon-sun.svg", "/icons/icon-moon.svg");
  const hamburgerIcon = useColorModeValue("/icons/hamburger-icon-light.svg", "/icons/hamburger-icon.svg");
  const howItWorksWallet = useColorModeValue("/images/how-it-works-wallet-light.svg", "/images/how-it-works-wallet.svg");
  const settingsIcon = useColorModeValue("/icons/settings-icon-light.svg", "/icons/settings-icon.svg");
  const homeIcon = useColorModeValue("/icons/home-icon-light.svg", "/icons/home-icon.svg");
  const howItWorksRequest = useColorModeValue("/images/how-it-works-request-light.svg", "/images/how-it-works-request.svg");
  const howItWorksLink = useColorModeValue("/images/how-it-works-link-light.svg", "/images/how-it-works-link.svg");
  const walletIcon = useColorModeValue("/images/why-wisp-wallet-light.svg", "/images/why-wisp-wallet.svg");
  const liquidityIcon = useColorModeValue("/images/why-wisp-liquidity-light.svg", "/images/why-wisp-liquidity.svg");
  const docsIcon = useColorModeValue("/images/why-wisp-docs-light.svg", "/images/why-wisp-docs.svg");
  const chevronIcon = useColorModeValue(
    "/icons/chevron_down_light.svg",
    "/icons/chevron_down.svg"
  );

  return {
    requestBG,
    landingBG,
    navigationBG,
    landingPhones,
    contrastText,
    menuText,
    selectedMenuText,
    reverseContrastText,
    reverseContractTextBorder,
    dimText,
    blocks,
    whyWispBackground,
    whyWispText,
    blockColor,
    textColor,
    inputColor,
    inputHover,
    addressHoverBG,
    overviewBG,
    borderColor,
    transactionsBG,

    logoMd,
    logoSm,
    lightToggle,
    buttonBg,
    hamburgerIcon,
    howItWorksWallet,
    settingsIcon,
    homeIcon,
    howItWorksRequest,
    howItWorksLink,
    walletIcon,
    liquidityIcon,
    docsIcon,
    chevronIcon,
  }
}

