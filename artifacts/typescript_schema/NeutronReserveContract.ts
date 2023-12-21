import { Contract, wasmKitTypes, Coin } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  transfer_ownership: string;
} | {
  distribute: {
    [k: string]: unknown;
  };
} | {
  update_config: {
    distribution_contract?: string | null;
    distribution_rate?: Decimal | null;
    min_period?: number | null;
    security_dao_address?: string | null;
    treasury_contract?: string | null;
    vesting_denominator?: number | null;
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
export type Decimal = string;
export interface InstantiateMsg {
  denom: string;
  distribution_contract: string;
  distribution_rate: Decimal;
  main_dao_address: string;
  min_period: number;
  security_dao_address: string;
  treasury_contract: string;
  vesting_denominator: number;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
} | {
  stats: {};
} | {
  pause_info: {};
};
export type Addr = string;
export interface Config {
  denom: string;
  distribution_contract: Addr;
  distribution_rate: Decimal;
  main_dao_address: Addr;
  min_period: number;
  security_dao_address: Addr;
  treasury_contract: Addr;
  vesting_denominator: number;
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
export type Uint128 = string;
export interface StatsResponse {
  total_distributed: Uint128;
  total_processed_burned_coins: Uint128;
  total_reserved: Uint128;
  [k: string]: unknown;
}
export interface NeutronReserveReadOnlyInterface {
  config: () => Promise<any>;
  stats: () => Promise<any>;
  pauseInfo: () => Promise<any>;
}
export class NeutronReserveQueryContract extends Contract implements NeutronReserveReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.config = this.config.bind(this);
    this.stats = this.stats.bind(this);
    this.pauseInfo = this.pauseInfo.bind(this);
  }
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
    });
  };
  stats = async (): Promise<any> => {
    return this.queryMsg({
      stats: {}
    });
  };
  pauseInfo = async (): Promise<any> => {
    return this.queryMsg({
      pause_info: {}
    });
  };
}
export interface NeutronReserveInterface extends NeutronReserveReadOnlyInterface {
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
  distribute: ({
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
    distributionContract,
    distributionRate,
    minPeriod,
    securityDaoAddress,
    treasuryContract,
    vestingDenominator
  }: {
    distributionContract: string | null;
    distributionRate: Decimal | null;
    minPeriod: number | null;
    securityDaoAddress: string | null;
    treasuryContract: string | null;
    vestingDenominator: number | null;
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
export class NeutronReserveContract extends NeutronReserveQueryContract implements NeutronReserveInterface {
  constructor(instantiateTag?: string) {
    super("neutron_reserve", instantiateTag);
    this.transferOwnership = this.transferOwnership.bind(this);
    this.distribute = this.distribute.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
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
  distribute = async ({
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
      distribute: {}
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
    distributionContract,
    distributionRate,
    minPeriod,
    securityDaoAddress,
    treasuryContract,
    vestingDenominator
  }: {
    distributionContract: string | null;
    distributionRate: Decimal | null;
    minPeriod: number | null;
    securityDaoAddress: string | null;
    treasuryContract: string | null;
    vestingDenominator: number | null;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        distribution_contract: distributionContract,
        distribution_rate: distributionRate,
        min_period: minPeriod,
        security_dao_address: securityDaoAddress,
        treasury_contract: treasuryContract,
        vesting_denominator: vestingDenominator
      }
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