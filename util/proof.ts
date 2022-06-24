// @ts-ignore
import { groth16 } from "snarkjs";
// @ts-ignore
import { utils } from "ffjavascript";
import { ethers } from "ethers";

export type DepositInput = {
  publicKey: string,
  blinding: string,
  amount: string,
  currency: string,
  encryptedDataHash: string,
}

export const generateDepositProof = async (input: DepositInput): Promise<string> => {
  const { proof } = await groth16.fullProve(
    utils.stringifyBigInts(input),
    "./circuits/deposit.wasm",
    "./circuits/deposit.zkey");

  return ethers.utils.defaultAbiCoder.encode(["uint256[8]"],
    [[
      proof.pi_a[0], proof.pi_a[1],
      proof.pi_b[0][1], proof.pi_b[0][0], proof.pi_b[1][1], proof.pi_b[1][0],
      proof.pi_c[0], proof.pi_c[1]
    ]]);
}