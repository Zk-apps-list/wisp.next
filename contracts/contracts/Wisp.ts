/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface WispInterface extends utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "deposit(uint256[2],uint256[2][2],uint256[2],uint256,uint256,uint256,address,bytes)": FunctionFragment;
    "depositVerifier()": FunctionFragment;
    "hasher()": FunctionFragment;
    "index()": FunctionFragment;
    "isValidRoot(uint256)": FunctionFragment;
    "levelHashes(uint8)": FunctionFragment;
    "levels()": FunctionFragment;
    "maxSize()": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "tokens(address)": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FIELD_SIZE"
      | "ROOT_HISTORY_SIZE"
      | "deposit"
      | "depositVerifier"
      | "hasher"
      | "index"
      | "isValidRoot"
      | "levelHashes"
      | "levels"
      | "maxSize"
      | "roots"
      | "tokens"
      | "zeros"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isValidRoot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "levelHashes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxSize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "roots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "zeros",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "levelHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {
    "Payment(uint256,uint256,bytes,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Payment"): EventFragment;
}

export interface PaymentEventObject {
  publicKey: BigNumber;
  commitment: BigNumber;
  encryptedData: string;
  index: number;
}
export type PaymentEvent = TypedEvent<
  [BigNumber, BigNumber, string, number],
  PaymentEventObject
>;

export type PaymentEventFilter = TypedEventFilter<PaymentEvent>;

export interface Wisp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WispInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      commitment: PromiseOrValue<BigNumberish>,
      publicKey: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      encryptedData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositVerifier(overrides?: CallOverrides): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

    index(overrides?: CallOverrides): Promise<[number]>;

    isValidRoot(
      root: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    levelHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    maxSize(overrides?: CallOverrides): Promise<[number]>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  deposit(
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    commitment: PromiseOrValue<BigNumberish>,
    publicKey: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    token: PromiseOrValue<string>,
    encryptedData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositVerifier(overrides?: CallOverrides): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  index(overrides?: CallOverrides): Promise<number>;

  isValidRoot(
    root: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  levelHashes(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  levels(overrides?: CallOverrides): Promise<number>;

  maxSize(overrides?: CallOverrides): Promise<number>;

  roots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  zeros(
    i: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    deposit(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      commitment: PromiseOrValue<BigNumberish>,
      publicKey: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      encryptedData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositVerifier(overrides?: CallOverrides): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    index(overrides?: CallOverrides): Promise<number>;

    isValidRoot(
      root: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    levelHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<number>;

    maxSize(overrides?: CallOverrides): Promise<number>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Payment(uint256,uint256,bytes,uint32)"(
      publicKey?: null,
      commitment?: null,
      encryptedData?: null,
      index?: null
    ): PaymentEventFilter;
    Payment(
      publicKey?: null,
      commitment?: null,
      encryptedData?: null,
      index?: null
    ): PaymentEventFilter;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      commitment: PromiseOrValue<BigNumberish>,
      publicKey: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      encryptedData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    isValidRoot(
      root: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levelHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    maxSize(overrides?: CallOverrides): Promise<BigNumber>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      commitment: PromiseOrValue<BigNumberish>,
      publicKey: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      encryptedData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValidRoot(
      root: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levelHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
