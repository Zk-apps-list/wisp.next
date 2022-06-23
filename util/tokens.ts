export type Token = {
  symbol: string,
  name: string,
  address: string,
  icon: string,
}

export const tokens: Token[] = [
  {
    symbol: "USDC",
    name: "USDC Coin",
    address: "",
    icon: '/icons/usdc_logo.svg'
  }, {
    symbol: "ETH",
    name: "Ether",
    address: "",
    icon: '/icons/eth_logo.svg'
  }, {
    symbol: "UNI",
    name: "Uniswap",
    address: "",
    icon: '/icons/uni_logo.svg'
  }
]