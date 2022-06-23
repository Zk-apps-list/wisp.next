import { poseidonHash } from "./hasher";
import { getEncryptionPublicKey } from "@metamask/eth-sig-util";

export class Keypair {

  privateKey: string | undefined;
  publicKey: string;
  encryptionKey: string;

  private constructor(privateKey: string | undefined, publicKey: string, encryptionKey: string) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.encryptionKey = encryptionKey;
  }

  static fromPrivateKey(privateKey: string) {
    const publicKey = poseidonHash([privateKey]).toHexString();
    const encryptionKey = getEncryptionPublicKey(privateKey.slice(2));
    return new Keypair(privateKey, publicKey, encryptionKey);
  }

  static fromSharedKey(publicKey: string, encryptionKey: string) {
    return new Keypair(undefined, publicKey, encryptionKey);
  }
}