import React, {createContext, useEffect, useState} from 'react';
import { ethers } from "ethers";
import { web3Modal } from '../pages';

export const AuthContext = createContext({
  account: undefined,
  connectWallet: async () => {},
  disconnect: async () => {},
  isWalletLoading: false
});

export const AuthContextProvider = (props: any) => {
  const { children } = props;

  const [account, setAccount] = useState<string | undefined>(undefined);
  const [provider, setProvider] = useState<any>(undefined);
  const [error, setError] = useState("");
  const [isWalletLoading, setIsWalletLoading] = useState(false);

  const connectWallet = async () => {
    try {
      setIsWalletLoading(true);
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      setProvider(provider);
      if (accounts) setAccount(accounts[0]);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsWalletLoading(false);
    }
  };

  const refreshState = () => {
    setAccount(undefined);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);

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
        isWalletLoading
      }}>
      {children}
    </AuthContext.Provider>
  )
}
