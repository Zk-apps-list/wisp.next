import React, { createContext, useState } from 'react';

type TransactionContextType = {
  isPending: boolean,
  setIsPending: (isPending: boolean) => void,
  isPendingModalOpen: boolean,
  setIsPendingModalOpen: (isPendingModalOpen: boolean) => void,
  transactionHash: string | undefined,
  setTransactionHash: (transactionHash: string | undefined) => void,
}

export const TransactionContext = createContext<TransactionContextType>({
  isPending: false,
  setIsPending: () => {}, 
  isPendingModalOpen: false,
  setIsPendingModalOpen: () => {},
  transactionHash: undefined,
  setTransactionHash: () => {},
});

export const TransactionContextProvider = (props: any) => {
  const { children } = props;
  
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isPendingModalOpen, setIsPendingModalOpen] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string | undefined>(undefined);

  return (
    <TransactionContext.Provider
      value={{
        isPending,
        setIsPending,
        isPendingModalOpen,
        setIsPendingModalOpen,
        transactionHash,
        setTransactionHash,
      }}>
      {children}
    </TransactionContext.Provider>
  )
}
