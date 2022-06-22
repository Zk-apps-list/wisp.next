import React, { createContext, useEffect, useState } from 'react';
import { ethers } from "ethers";
import { web3Modal } from '../pages';
import { Keypair } from "../util/keypair";
import { Web3Provider } from "@ethersproject/providers";

type AuthContextType = {
  account: string,
  connectWallet: () => {},
  disconnect: () => {},
  isWalletLoading: boolean,
  personalKeypair: Keypair | undefined,
  sharedKeypair: Keypair | undefined,
  web3Provider: ethers.providers.Web3Provider | undefined
}

export const AuthContext = createContext<AuthContextType>({
  account: "",
  connectWallet: async () => {
  },
  disconnect: async () => {
  },
  isWalletLoading: false,
  personalKeypair: undefined,
  sharedKeypair: undefined,
  web3Provider: undefined
});

export const AuthContextProvider = (props: any) => {
  const { children } = props;

  const [account, setAccount] = useState<string>("");
  const [personalKeypair, setPersonalKeypair] = useState<Keypair | undefined>();
  const [sharedKeypair, setSharedKeypair] = useState<Keypair | undefined>();
  const [provider, setProvider] = useState<any>(undefined);
  const [web3Provider, setWeb3Provider] = useState<Web3Provider | undefined>(undefined);
  const [error, setError] = useState("");
  const [isWalletLoading, setIsWalletLoading] = useState(false);

  const connectWallet = async () => {
    try {
      setIsWalletLoading(true);
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      setWeb3Provider(library);
      const accounts = await library.listAccounts();
      const signature = await library.getSigner().signMessage("some message");
      setPersonalKeypair(Keypair.fromPrivateKey(ethers.utils.id(signature + "0")));
      setSharedKeypair(Keypair.fromPrivateKey(ethers.utils.id(signature + "1")));
      setProvider(provider);
      if (accounts) setAccount(accounts[0]);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsWalletLoading(false);
    }
  };

  const refreshState = () => {
    setAccount("");
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
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

  return (
    <AuthContext.Provider
      value={{
        account,
        connectWallet,
        disconnect,
        isWalletLoading,
        personalKeypair,
        sharedKeypair,
        web3Provider
      }}>
      {children}
    </AuthContext.Provider>
  )
}
