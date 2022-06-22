/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Verifier, VerifierInterface } from "../../contracts/Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[4]",
        name: "input",
        type: "uint256[4]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bca806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004a60048036038101906100459190611672565b610060565b60405161005791906116f6565b60405180910390f35b600061006a611242565b60405180604001604052808760006002811061008957610088611711565b5b60200201518152602001876001600281106100a7576100a6611711565b5b6020020151815250816000018190525060405180604001604052806040518060400160405280886000600281106100e1576100e0611711565b5b60200201516000600281106100f9576100f8611711565b5b602002015181526020018860006002811061011757610116611711565b5b602002015160016002811061012f5761012e611711565b5b6020020151815250815260200160405180604001604052808860016002811061015b5761015a611711565b5b602002015160006002811061017357610172611711565b5b602002015181526020018860016002811061019157610190611711565b5b60200201516001600281106101a9576101a8611711565b5b602002015181525081525081602001819052506040518060400160405280856000600281106101db576101da611711565b5b60200201518152602001856001600281106101f9576101f8611711565b5b602002015181525081604001819052506000600467ffffffffffffffff811115610226576102256113a9565b5b6040519080825280602002602001820160405280156102545781602001602082028036833780820191505090505b50905060005b60048110156102ad5784816004811061027657610275611711565b5b602002015182828151811061028e5761028d611711565b5b60200260200101818152505080806102a59061176f565b91505061025a565b5060006102ba82846102d9565b036102ca576001925050506102d1565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001905060006103096104cc565b90508060800151516001865161031f91906117b7565b1461035f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103569061186a565b60405180910390fd5b60006040518060400160405280600081526020016000815250905060005b865181101561044e578387828151811061039a57610399611711565b5b6020026020010151106103e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d9906118d6565b60405180910390fd5b6104398261043485608001516001856103fb91906117b7565b8151811061040c5761040b611711565b5b60200260200101518a858151811061042757610426611711565b5b6020026020010151610a38565b610b10565b915080806104469061176f565b91505061037d565b5061047881836080015160008151811061046b5761046a611711565b5b6020026020010151610b10565b90506104ae61048a8660000151610c0e565b8660200151846000015185602001518587604001518b604001518960600151610cb3565b6104be57600193505050506104c6565b600093505050505b92915050565b6104d4611275565b60405180604001604052807f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281526020017f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19268152508160000181905250604051806040016040528060405180604001604052807f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c81526020017f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab815250815260200160405180604001604052807f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781526020017f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec88152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f13cf3ef88cb4d83a50b3279fbb666b49b442e8edd992d9e179674d144ebff8ac81526020017f22291380f3a0bbeffa2249d72fc4a12aa222de71ad3f6188010b6d702beed7f2815250815260200160405180604001604052807f1d67385f292f9ea52801431eb50488dbfec6b76983393b92a35aa5cc0a1e0bf781526020017f10f4f955a6929992b0441aff619d4c92de654967d471868b3fdba91d6e330e958152508152508160600181905250600567ffffffffffffffff81111561079b5761079a6113a9565b5b6040519080825280602002602001820160405280156107d457816020015b6107c16112bc565b8152602001906001900390816107b95790505b50816080018190525060405180604001604052807f19927710aac5288d78f15b099925d16b691ac39a167687f1f922c2a34d93d7db81526020017f2e929c79c894b6630b1704b02a50926c00bf6ba16b5fd05d18e831a4d5ead7c8815250816080015160008151811061084a57610849611711565b5b602002602001018190525060405180604001604052807f18996286aeec5f27ba987a6c874f29e11f0d6f8a02a99d711362fdd2c727683281526020017f0730be3d92c9bea98d1d2f3acef259f3659801db04688c74c4484efa1501abc581525081608001516001815181106108c2576108c1611711565b5b602002602001018190525060405180604001604052807f0c0a05a5dbafa7517f8d0ccd1f282928f8cf855b263d341b043242880ba7b64581526020017f069256e7dbbf9b7b2537dd94131d6c4f5ab3f2d273a17fbc5e8d8de6e4bac23e815250816080015160028151811061093a57610939611711565b5b602002602001018190525060405180604001604052807f04bcd806ddb4779afb9e1f0d03a9c155ad1131caa0246378dfa68bf900a7a12681526020017f168f847b15c664d857e83ca42b8e5893e00926890175cf95f8b4bf754c3f2ad881525081608001516003815181106109b2576109b1611711565b5b602002602001018190525060405180604001604052807f0b61d76b501e2d1af02fdcb3f8e0818c6a7ffa0d3061ee338f85d9bec237e48781526020017f1ee1db380d517a6a808725c0c45ce4d08f3042466173a2d737807086cc2de81c8152508160800151600481518110610a2a57610a29611711565b5b602002602001018190525090565b610a406112bc565b610a486112d6565b836000015181600060038110610a6157610a60611711565b5b602002018181525050836020015181600160038110610a8357610a82611711565b5b6020020181815250508281600260038110610aa157610aa0611711565b5b602002018181525050600060608360808460076107d05a03fa90508060008103610ac757fe5b5080610b08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aff90611942565b60405180910390fd5b505092915050565b610b186112bc565b610b206112f8565b836000015181600060048110610b3957610b38611711565b5b602002018181525050836020015181600160048110610b5b57610b5a611711565b5b602002018181525050826000015181600260048110610b7d57610b7c611711565b5b602002018181525050826020015181600360048110610b9f57610b9e611711565b5b602002018181525050600060608360c08460066107d05a03fa90508060008103610bc557fe5b5080610c06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfd906119ae565b60405180910390fd5b505092915050565b610c166112bc565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610c53575060008360200151145b15610c77576040518060400160405280600081526020016000815250915050610cae565b604051806040016040528084600001518152602001828560200151610c9c91906119fd565b83610ca79190611a2e565b8152509150505b919050565b600080600467ffffffffffffffff811115610cd157610cd06113a9565b5b604051908082528060200260200182016040528015610d0a57816020015b610cf76112bc565b815260200190600190039081610cef5790505b5090506000600467ffffffffffffffff811115610d2a57610d296113a9565b5b604051908082528060200260200182016040528015610d6357816020015b610d5061131a565b815260200190600190039081610d485790505b5090508a82600081518110610d7b57610d7a611711565b5b60200260200101819052508882600181518110610d9b57610d9a611711565b5b60200260200101819052508682600281518110610dbb57610dba611711565b5b60200260200101819052508482600381518110610ddb57610dda611711565b5b60200260200101819052508981600081518110610dfb57610dfa611711565b5b60200260200101819052508781600181518110610e1b57610e1a611711565b5b60200260200101819052508581600281518110610e3b57610e3a611711565b5b60200260200101819052508381600381518110610e5b57610e5a611711565b5b6020026020010181905250610e708282610e80565b9250505098975050505050505050565b60008151835114610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90611aae565b60405180910390fd5b6000835190506000600682610edb9190611ace565b905060008167ffffffffffffffff811115610ef957610ef86113a9565b5b604051908082528060200260200182016040528015610f275781602001602082028036833780820191505090505b50905060005b838110156111ac57868181518110610f4857610f47611711565b5b602002602001015160000151826000600684610f649190611ace565b610f6e91906117b7565b81518110610f7f57610f7e611711565b5b602002602001018181525050868181518110610f9e57610f9d611711565b5b602002602001015160200151826001600684610fba9190611ace565b610fc491906117b7565b81518110610fd557610fd4611711565b5b602002602001018181525050858181518110610ff457610ff3611711565b5b60200260200101516000015160006002811061101357611012611711565b5b60200201518260026006846110289190611ace565b61103291906117b7565b8151811061104357611042611711565b5b60200260200101818152505085818151811061106257611061611711565b5b60200260200101516000015160016002811061108157611080611711565b5b60200201518260036006846110969190611ace565b6110a091906117b7565b815181106110b1576110b0611711565b5b6020026020010181815250508581815181106110d0576110cf611711565b5b6020026020010151602001516000600281106110ef576110ee611711565b5b60200201518260046006846111049190611ace565b61110e91906117b7565b8151811061111f5761111e611711565b5b60200260200101818152505085818151811061113e5761113d611711565b5b60200260200101516020015160016002811061115d5761115c611711565b5b60200201518260056006846111729190611ace565b61117c91906117b7565b8151811061118d5761118c611711565b5b60200260200101818152505080806111a49061176f565b915050610f2d565b506111b5611340565b6000602082602086026020860160086107d05a03fa905080600081036111d757fe5b5080611218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120f90611b74565b60405180910390fd5b60008260006001811061122e5761122d611711565b5b602002015114159550505050505092915050565b60405180606001604052806112556112bc565b815260200161126261131a565b815260200161126f6112bc565b81525090565b6040518060a001604052806112886112bc565b815260200161129561131a565b81526020016112a261131a565b81526020016112af61131a565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b604051806040016040528061132d611362565b815260200161133a611362565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6113e182611398565b810181811067ffffffffffffffff82111715611400576113ff6113a9565b5b80604052505050565b6000611413611384565b905061141f82826113d8565b919050565b600067ffffffffffffffff82111561143f5761143e6113a9565b5b602082029050919050565b600080fd5b6000819050919050565b6114628161144f565b811461146d57600080fd5b50565b60008135905061147f81611459565b92915050565b600061149861149384611424565b611409565b905080602084028301858111156114b2576114b161144a565b5b835b818110156114db57806114c78882611470565b8452602084019350506020810190506114b4565b5050509392505050565b600082601f8301126114fa576114f9611393565b5b6002611507848285611485565b91505092915050565b600067ffffffffffffffff82111561152b5761152a6113a9565b5b602082029050919050565b600061154961154484611510565b611409565b905080604084028301858111156115635761156261144a565b5b835b8181101561158c578061157888826114e5565b845260208401935050604081019050611565565b5050509392505050565b600082601f8301126115ab576115aa611393565b5b60026115b8848285611536565b91505092915050565b600067ffffffffffffffff8211156115dc576115db6113a9565b5b602082029050919050565b60006115fa6115f5846115c1565b611409565b905080602084028301858111156116145761161361144a565b5b835b8181101561163d57806116298882611470565b845260208401935050602081019050611616565b5050509392505050565b600082601f83011261165c5761165b611393565b5b60046116698482856115e7565b91505092915050565b600080600080610180858703121561168d5761168c61138e565b5b600061169b878288016114e5565b94505060406116ac87828801611596565b93505060c06116bd878288016114e5565b9250506101006116cf87828801611647565b91505092959194509250565b60008115159050919050565b6116f0816116db565b82525050565b600060208201905061170b60008301846116e7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061177a8261144f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036117ac576117ab611740565b5b600182019050919050565b60006117c28261144f565b91506117cd8361144f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561180257611801611740565b5b828201905092915050565b600082825260208201905092915050565b7f76657269666965722d6261642d696e7075740000000000000000000000000000600082015250565b600061185460128361180d565b915061185f8261181e565b602082019050919050565b6000602082019050818103600083015261188381611847565b9050919050565b7f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400600082015250565b60006118c0601f8361180d565b91506118cb8261188a565b602082019050919050565b600060208201905081810360008301526118ef816118b3565b9050919050565b7f70616972696e672d6d756c2d6661696c65640000000000000000000000000000600082015250565b600061192c60128361180d565b9150611937826118f6565b602082019050919050565b6000602082019050818103600083015261195b8161191f565b9050919050565b7f70616972696e672d6164642d6661696c65640000000000000000000000000000600082015250565b600061199860128361180d565b91506119a382611962565b602082019050919050565b600060208201905081810360008301526119c78161198b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611a088261144f565b9150611a138361144f565b925082611a2357611a226119ce565b5b828206905092915050565b6000611a398261144f565b9150611a448361144f565b925082821015611a5757611a56611740565b5b828203905092915050565b7f70616972696e672d6c656e677468732d6661696c656400000000000000000000600082015250565b6000611a9860168361180d565b9150611aa382611a62565b602082019050919050565b60006020820190508181036000830152611ac781611a8b565b9050919050565b6000611ad98261144f565b9150611ae48361144f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b1d57611b1c611740565b5b828202905092915050565b7f70616972696e672d6f70636f64652d6661696c65640000000000000000000000600082015250565b6000611b5e60158361180d565b9150611b6982611b28565b602082019050919050565b60006020820190508181036000830152611b8d81611b51565b905091905056fea2646970667358221220fba466630bf07d04c958bb20004baab9564962b1483ee6424f8747800901512f64736f6c634300080d0033";

type VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier__factory extends ContractFactory {
  constructor(...args: VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  override connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new utils.Interface(_abi) as VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}
