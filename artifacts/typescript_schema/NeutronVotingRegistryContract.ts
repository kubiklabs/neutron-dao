import { Contract, wasmKitTypes, Coin } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  add_voting_vault: {
    new_voting_vault_contract: string;
    [k: string]: unknown;
  };
} | {
  remove_voting_vault: {
    old_voting_vault_contract: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    owner: string;
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  owner: string;
  voting_vaults: string[];
  [k: string]: unknown;
}
export type QueryMsg = {
  dao: {};
} | {
  config: {};
} | {
  voting_vaults: {};
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
  };
} | {
  total_power_at_height: {
    height?: number | null;
  };
} | {
  info: {};
};
export type Addr = string;
export interface Config {
  owner: Addr;
  voting_vaults: Addr[];
  [k: string]: unknown;
}
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export type Uint128 = string;
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export type Array_of_VotingVault = VotingVault[];
export interface VotingVault {
  address: string;
  description: string;
  name: string;
  [k: string]: unknown;
}
export interface NeutronVotingRegistryReadOnlyInterface {
  dao: () => Promise<any>;
  config: () => Promise<any>;
  votingVaults: () => Promise<any>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height: number | null;
  }) => Promise<any>;
  totalPowerAtHeight: ({
    height
  }: {
    height: number | null;
  }) => Promise<any>;
  info: () => Promise<any>;
}
export class NeutronVotingRegistryQueryContract extends Contract implements NeutronVotingRegistryReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.dao = this.dao.bind(this);
    this.config = this.config.bind(this);
    this.votingVaults = this.votingVaults.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.info = this.info.bind(this);
  }
  dao = async (): Promise<any> => {
    return this.queryMsg({
      dao: {}
    });
  };
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
    });
  };
  votingVaults = async (): Promise<any> => {
    return this.queryMsg({
      voting_vaults: {}
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height: number | null;
  }): Promise<any> => {
    return this.queryMsg({
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height: number | null;
  }): Promise<any> => {
    return this.queryMsg({
      total_power_at_height: {
        height
      }
    });
  };
  info = async (): Promise<any> => {
    return this.queryMsg({
      info: {}
    });
  };
}
export interface NeutronVotingRegistryInterface extends NeutronVotingRegistryReadOnlyInterface {
  addVotingVault: ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    newVotingVaultContract
  }: {
    newVotingVaultContract: string;
  }) => Promise<any>;
  removeVotingVault: ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    oldVotingVaultContract
  }: {
    oldVotingVaultContract: string;
  }) => Promise<any>;
  updateConfig: ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    owner
  }: {
    owner: string;
  }) => Promise<any>;
}
export class NeutronVotingRegistryContract extends NeutronVotingRegistryQueryContract implements NeutronVotingRegistryInterface {
  constructor(instantiateTag?: string) {
    super("neutron_voting_registry", instantiateTag);
    this.addVotingVault = this.addVotingVault.bind(this);
    this.removeVotingVault = this.removeVotingVault.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }
  addVotingVault = async ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    newVotingVaultContract
  }: {
    newVotingVaultContract: string;
  }): Promise<any> => {
    return await this.executeMsg({
      add_voting_vault: {
        new_voting_vault_contract: newVotingVaultContract
      }
    }, account, customFees, memo, transferAmount);
  };
  removeVotingVault = async ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    oldVotingVaultContract
  }: {
    oldVotingVaultContract: string;
  }): Promise<any> => {
    return await this.executeMsg({
      remove_voting_vault: {
        old_voting_vault_contract: oldVotingVaultContract
      }
    }, account, customFees, memo, transferAmount);
  };
  updateConfig = async ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }, {
    owner
  }: {
    owner: string;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        owner
      }
    }, account, customFees, memo, transferAmount);
  };
}