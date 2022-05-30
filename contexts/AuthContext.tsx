import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
  account: undefined,
  setAccount: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [account, setAccount] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{
        account,
        setAccount
      }}>
      {children}
    </AuthContext.Provider>
  )
}
