interface Chain {
  id: string,
  hexId: string,
  label: string
}

export const chains: Chain[] = [
  {
    id: "1",
    hexId: "0x1",
    label: "Ethereum Mainnet",
  },
  {
    id: "3",
    hexId: "0x3",
    label: "Ropsten Testnet",
  },
  {
    id: "4",
    hexId: "0x4",
    label: "Rinkeby Testnet",
  },
  {
    id: "42",
    hexId: "0x42",
    label: "Kovan Testnet",
  },
  {
    id: "137",
    hexId: "0x89",
    label: "Polygon Mainnet",
  },
  {
    id: "80001",
    hexId: "0x13881",
    label: "Mumbai Testnet",
  }
];