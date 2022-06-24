import { BigNumber, ethers } from "ethers";
import { encryptData } from "./encryption";
import { generateDepositProof } from "./proof";
import { poseidonHash } from "./hasher";
import { Keypair } from "./keypair";
import { randomBN } from "./random";

export const generateLinkPath = async (keypair: Keypair, amount: BigNumber, token: string) => {
  const blinding = randomBN().toHexString();
  const publicKeyBuff = ethers.utils.arrayify(keypair.publicKey);
  const amountBuff = ethers.utils.arrayify(amount.toHexString());
  const tokenBuff = ethers.utils.arrayify(token);
  const encryptedData = encryptData(keypair.encryptionKey, Buffer.concat([
    publicKeyBuff,
    ethers.utils.arrayify(blinding),
    amountBuff,
    tokenBuff,
  ]));
  const encryptedDataHash = ethers.utils.solidityKeccak256(["bytes"], [encryptedData]);

  const proof = await generateDepositProof({
    publicKey: keypair.publicKey,
    blinding: blinding,
    amount: amount.toString(),
    currency: token,
    encryptedDataHash: encryptedDataHash
  });

  const commitment = poseidonHash([keypair.publicKey, blinding, amount, token]);

  return Buffer.concat([
    ethers.utils.arrayify(proof), // 256 bytes
    ethers.utils.arrayify(commitment), // 32 bytes
    publicKeyBuff, // 32 bytes
    tokenBuff, // 20 bytes
    Buffer.alloc(32 - amountBuff.length), amountBuff,  // 32 bytes
    encryptedData //
  ]).toString("hex");
}

export type DecodedPath = {
  proof: string;
  commitment: string;
  publicKey: string;
  token: string;
  amount: BigNumber,
  encryptedData: string;
}

export const decodeLinkPath = (path: string): DecodedPath => {
  const pathBuffer = Buffer.from(path, "hex");

  return {
    proof: "0x" + pathBuffer.slice(0, 256).toString("hex"),
    commitment: "0x" + pathBuffer.slice(256, 288).toString("hex"),
    publicKey: "0x" + pathBuffer.slice(288, 320).toString("hex"),
    token: "0x" + pathBuffer.slice(320, 340).toString("hex"),
    amount: BigNumber.from(pathBuffer.slice(340, 372)),
    encryptedData: "0x" + pathBuffer.slice(372).toString("hex")
  }
}