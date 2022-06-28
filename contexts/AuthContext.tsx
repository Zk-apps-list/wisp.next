import React, { createContext, useEffect, useState } from 'react';
import { ethers } from "ethers";
import { web3Modal } from '../pages';
import { Web3Provider } from "@ethersproject/providers";
import { Keypair } from '../util/keypair';
import { getPersonalKeypair, getSharedKeypair } from '../util/signature';

type AuthContextType = {
  account: string | undefined,
  connectWallet: () => {},
  disconnect: () => {},
  isWalletLoading: boolean,
  web3Provider: ethers.providers.Web3Provider | undefined,
  personalKeypair: Keypair | undefined,
  sharedKeypair: Keypair | undefined,
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  account: undefined,
  connectWallet: async () => {},
  disconnect: async () => {},
  isWalletLoading: false,
  web3Provider: undefined,
  personalKeypair: undefined,
  sharedKeypair: undefined,
  isLoading: true,
});

export const AuthContextProvider = (props: any) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [personalKeypair, setPersonalKeypair] = useState<Keypair>();
  const [sharedKeypair, setSharedKeypair] = useState<Keypair>();
  const [web3Provider, setWeb3Provider] = useState<Web3Provider | undefined>(undefined);
  const [provider, setProvider] = useState<any>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isWalletLoading, setIsWalletLoading] = useState<boolean>(false);

  const connectWallet = async () => {
    try {
      setIsWalletLoading(true);
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider) as Web3Provider;
      setProvider(provider);
      setWeb3Provider(web3Provider);

      // Retrieve signature on first sign in
      if(!account) {
        const accounts = await web3Provider.listAccounts();
        const signature = await web3Provider.getSigner().signMessage("some message");

        localStorage.setItem("account", accounts[0]);
        localStorage.setItem("personalKeypair", JSON.stringify(getPersonalKeypair(signature)));
        localStorage.setItem("sharedKeypair", JSON.stringify(getSharedKeypair(signature)));

        setPersonalKeypair(getPersonalKeypair(signature));
        setSharedKeypair(getSharedKeypair(signature));
        setAccount(accounts[0]);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setIsWalletLoading(false);
    }
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    localStorage.removeItem("account");
    localStorage.removeItem("personalKeypair");
    localStorage.removeItem("sharedKeypair");
    setAccount(undefined);
    setPersonalKeypair(undefined);
    setSharedKeypair(undefined);
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("accountsChanged", accounts);
        if (accounts) {
          setAccount(accounts[0]);
          localStorage.setItem("account", accounts[0]);
        };
      };

      // const handleChainChanged = (_hexChainId) => {
      //   setChainId(_hexChainId);
      // };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      // provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          // provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  useEffect(() => {
    try {
      setIsLoading(true);
      const account = localStorage.getItem("account");
      const personalKeypair = JSON.parse(localStorage.getItem("personalKeypair") as string);
      const sharedKeypair = JSON.parse(localStorage.getItem("sharedKeypair") as string);

      if (account && personalKeypair && sharedKeypair) {
        setAccount(account);
        setPersonalKeypair(personalKeypair);
        setSharedKeypair(sharedKeypair);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        account,
        connectWallet,
        disconnect,
        isWalletLoading,
        web3Provider,
        personalKeypair,
        sharedKeypair,
        isLoading
      }}>
      {children}
    </AuthContext.Provider>
  )
}
