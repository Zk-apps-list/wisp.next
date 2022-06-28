import { ethers } from "ethers";
import { Keypair } from "./keypair";

export const getPersonalKeypair = (signature: string) => Keypair.fromPrivateKey(ethers.utils.id(signature + "0"));
export const getSharedKeypair = (signature: string) => Keypair.fromPrivateKey(ethers.utils.id(signature + "1"));
  