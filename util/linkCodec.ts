import { Keypair } from "./keypair";
import { ethers } from "ethers";

export class LinkCodec {

  sharedKeypair: Keypair;
  token: string;
  amount: string;

  constructor(sharedKeypair: Keypair, token: string, amount: string) {
    this.sharedKeypair = sharedKeypair;
    this.token = token;
    this.amount = amount;
  }

  encode(): string {
    return Buffer.concat([
      ethers.utils.arrayify(this.sharedKeypair.publicKey), // 32 bytes
      Buffer.from(this.sharedKeypair.encryptionKey, "base64"), // 32 bytes
      ethers.utils.arrayify(this.token), // 20 bytes
      ethers.utils.arrayify(this.amount) // up to 32 bytes
    ]).toString("hex");
  }

  static decode(encoded: string): LinkCodec {
    if (encoded.length < 168 || encoded.length > 232) {
      throw Error('Invalid encoded string');
    }

    const buffer = Buffer.from(encoded, "hex");
    const publicKey = ethers.utils.hexlify(buffer.slice(0, 32));
    const encryptionKey = buffer.slice(32, 64).toString("base64");
    const token = ethers.utils.hexlify(buffer.slice(64, 84));
    const amount = ethers.utils.hexlify(buffer.slice(84));

    return new LinkCodec(Keypair.fromSharedKey(publicKey, encryptionKey), token, amount);
  }
}