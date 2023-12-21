import { Contract, wasmKitTypes, Coin } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  update_config: {
    description: string;
    name: string;
    owner: string;
    [k: string]: unknown;
  };
} | {
  bond: {
    [k: string]: unknown;
  };
} | {
  unbond: {
    amount: Uint128;
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface InstantiateMsg {
  denom: string;
  description: string;
  name: string;
  owner: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
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
  bonding_status: {
    address: string;
    height?: number | null;
  };
} | {
  dao: {};
} | {
  name: {};
} | {
  description: {};
} | {
  list_bonders: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  info: {};
};
export interface BondingStatusResponse {
  bonding_enabled: boolean;
  height: number;
  unbondable_abount: Uint128;
  [k: string]: unknown;
}
export type Addr = string;
export interface Config {
  denom: string;
  description: string;
  name: string;
  owner: Addr;
  [k: string]: unknown;
}
export type String = string;
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export type Array_of_Tuple_of_Addr_and_Uint128 = [Addr, Uint128][];
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
export interface NeutronVaultReadOnlyInterface {
  config: () => Promise<any>;
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
  bondingStatus: ({
    address,
    height
  }: {
    address: string;
    height: number | null;
  }) => Promise<any>;
  dao: () => Promise<any>;
  name: () => Promise<any>;
  description: () => Promise<any>;
  listBonders: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }) => Promise<any>;
  info: () => Promise<any>;
}
export class NeutronVaultQueryContract extends Contract implements NeutronVaultReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.config = this.config.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.bondingStatus = this.bondingStatus.bind(this);
    this.dao = this.dao.bind(this);
    this.name = this.name.bind(this);
    this.description = this.description.bind(this);
    this.listBonders = this.listBonders.bind(this);
    this.info = this.info.bind(this);
  }
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
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
  bondingStatus = async ({
    address,
    height
  }: {
    address: string;
    height: number | null;
  }): Promise<any> => {
    return this.queryMsg({
      bonding_status: {
        address,
        height
      }
    });
  };
  dao = async (): Promise<any> => {
    return this.queryMsg({
      dao: {}
    });
  };
  name = async (): Promise<any> => {
    return this.queryMsg({
      name: {}
    });
  };
  description = async (): Promise<any> => {
    return this.queryMsg({
      description: {}
    });
  };
  listBonders = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      list_bonders: {
        limit,
        start_after: startAfter
      }
    });
  };
  info = async (): Promise<any> => {
    return this.queryMsg({
      info: {}
    });
  };
}
export interface NeutronVaultInterface extends NeutronVaultReadOnlyInterface {
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
    description,
    name,
    owner
  }: {
    description: string;
    name: string;
    owner: string;
  }) => Promise<any>;
  bond: ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }) => Promise<any>;
  unbond: ({
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
    amount
  }: {
    amount: Uint128;
  }) => Promise<any>;
}
export class NeutronVaultContract extends NeutronVaultQueryContract implements NeutronVaultInterface {
  constructor(instantiateTag?: string) {
    super("neutron_vault", instantiateTag);
    this.updateConfig = this.updateConfig.bind(this);
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
  }
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
    description,
    name,
    owner
  }: {
    description: string;
    name: string;
    owner: string;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        description,
        name,
        owner
      }
    }, account, customFees, memo, transferAmount);
  };
  bond = async ({
    account,
    customFees,
    memo,
    transferAmount
  }: {
    account: wasmKitTypes.UserAccount;
    customFees?: wasmKitTypes.TxnStdFee;
    memo?: string;
    transferAmount?: readonly Coin[];
  }): Promise<any> => {
    return await this.executeMsg({
      bond: {}
    }, account, customFees, memo, transferAmount);
  };
  unbond = async ({
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
    amount
  }: {
    amount: Uint128;
  }): Promise<any> => {
    return await this.executeMsg({
      unbond: {
        amount
      }
    }, account, customFees, memo, transferAmount);
  };
}