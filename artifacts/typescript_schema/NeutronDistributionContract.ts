import { Contract, wasmKitTypes, Coin } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  transfer_ownership: string;
} | {
  set_shares: {
    shares: [string, Uint128][];
    [k: string]: unknown;
  };
} | {
  fund: {
    [k: string]: unknown;
  };
} | {
  claim: {
    [k: string]: unknown;
  };
} | {
  pause: {
    duration: number;
    [k: string]: unknown;
  };
} | {
  unpause: {
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface InstantiateMsg {
  denom: string;
  main_dao_address: string;
  security_dao_address: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
} | {
  pending: {};
} | {
  shares: {};
} | {
  pause_info: {};
};
export type Addr = string;
export interface Config {
  denom: string;
  main_dao_address: Addr;
  security_dao_address: Addr;
  [k: string]: unknown;
}
export type PauseInfoResponse = {
  paused: {
    until_height: number;
    [k: string]: unknown;
  };
} | {
  unpaused: {
    [k: string]: unknown;
  };
};
export type Array_of_Tuple_of_Addr_and_Uint128 = [Addr, Uint128][];
export interface NeutronDistributionReadOnlyInterface {
  config: () => Promise<any>;
  pending: () => Promise<any>;
  shares: () => Promise<any>;
  pauseInfo: () => Promise<any>;
}
export class NeutronDistributionQueryContract extends Contract implements NeutronDistributionReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.config = this.config.bind(this);
    this.pending = this.pending.bind(this);
    this.shares = this.shares.bind(this);
    this.pauseInfo = this.pauseInfo.bind(this);
  }
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
    });
  };
  pending = async (): Promise<any> => {
    return this.queryMsg({
      pending: {}
    });
  };
  shares = async (): Promise<any> => {
    return this.queryMsg({
      shares: {}
    });
  };
  pauseInfo = async (): Promise<any> => {
    return this.queryMsg({
      pause_info: {}
    });
  };
}
export interface NeutronDistributionInterface extends NeutronDistributionReadOnlyInterface {
  transferOwnership: ({
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
  setShares: ({
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
    shares
  }: {
    shares: [string, Uint128][];
  }) => Promise<any>;
  fund: ({
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
  claim: ({
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
  pause: ({
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
    duration
  }: {
    duration: number;
  }) => Promise<any>;
  unpause: ({
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
}
export class NeutronDistributionContract extends NeutronDistributionQueryContract implements NeutronDistributionInterface {
  constructor(instantiateTag?: string) {
    super("neutron_distribution", instantiateTag);
    this.transferOwnership = this.transferOwnership.bind(this);
    this.setShares = this.setShares.bind(this);
    this.fund = this.fund.bind(this);
    this.claim = this.claim.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
  }
  transferOwnership = async ({
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
      transfer_ownership: {}
    }, account, customFees, memo, transferAmount);
  };
  setShares = async ({
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
    shares
  }: {
    shares: [string, Uint128][];
  }): Promise<any> => {
    return await this.executeMsg({
      set_shares: {
        shares
      }
    }, account, customFees, memo, transferAmount);
  };
  fund = async ({
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
      fund: {}
    }, account, customFees, memo, transferAmount);
  };
  claim = async ({
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
      claim: {}
    }, account, customFees, memo, transferAmount);
  };
  pause = async ({
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
    duration
  }: {
    duration: number;
  }): Promise<any> => {
    return await this.executeMsg({
      pause: {
        duration
      }
    }, account, customFees, memo, transferAmount);
  };
  unpause = async ({
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
      unpause: {}
    }, account, customFees, memo, transferAmount);
  };
}