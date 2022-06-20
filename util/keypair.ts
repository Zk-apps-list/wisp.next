import { poseidonHash } from "./hasher";
import { getEncryptionPublicKey } from "@metamask/eth-sig-util";

export class Keypair {
  privateKey: string;
  publicKey: string;
  encryptionKey: string;

  constructor(privateKey: string) {
    this.privateKey = privateKey;
    this.publicKey = poseidonHash([privateKey]).toHexString();
    this.encryptionKey = getEncryptionPublicKey(privateKey.slice(2));
  }
}