export type Token = {
  symbol: string,
  name: string,
  address: string
}

export const tokens: Token[] = [
  {
    symbol: "USDC",
    name: "USDC Coin",
    address: "0x06F875B02a7a42Ce6677360159b0C5598fB1eAb1"
  }, {
    symbol: "ETH",
    name: "Ether",
    address: "0x0ffC5e6846d639b11a937D91E4ab62E05e2a642b"
  }, {
    symbol: "UNI",
    name: "Uniswap",
    address: "0xc3D804b24F3AE0bcc9455C384AB31C783297f285"
  }
]