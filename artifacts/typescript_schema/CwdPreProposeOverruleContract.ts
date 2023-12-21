import { Contract, wasmKitTypes, Coin } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  propose: {
    msg: ProposeMessage;
    [k: string]: unknown;
  };
} | {
  update_config: {
    deposit_info?: UncheckedDepositInfo | null;
    open_proposal_submission: boolean;
    [k: string]: unknown;
  };
} | {
  withdraw: {
    denom?: UncheckedDenom | null;
    [k: string]: unknown;
  };
} | {
  proposal_created_hook: {
    proposal_id: number;
    proposer: string;
    [k: string]: unknown;
  };
} | {
  proposal_completed_hook: {
    new_status: Status;
    proposal_id: number;
    [k: string]: unknown;
  };
};
export type ProposeMessage = {
  propose_overrule: {
    proposal_id: number;
    timelock_contract: string;
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type DepositToken = {
  token: {
    denom: UncheckedDenom;
    [k: string]: unknown;
  };
} | {
  voting_module_token: {
    [k: string]: unknown;
  };
};
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type DepositRefundPolicy = "always" | "only_passed" | "never";
export type Status = "open" | "rejected" | "passed" | "executed" | "closed" | "execution_failed";
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: DepositToken;
  refund_policy: DepositRefundPolicy;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  deposit_info?: UncheckedDepositInfo | null;
  open_proposal_submission: boolean;
  [k: string]: unknown;
}
export type QueryMsg = {
  proposal_module: {};
} | {
  dao: {};
} | {
  config: {};
} | {
  deposit_info: {
    proposal_id: number;
  };
} | {
  query_extension: {
    msg: QueryExt;
  };
};
export type QueryExt = {
  overrule_proposal_id: {
    subdao_proposal_id: number;
    timelock_address: string;
    [k: string]: unknown;
  };
};
export type CheckedDenom = {
  native: string;
} | {
  cw20: Addr;
};
export type Addr = string;
export interface Config {
  deposit_info?: CheckedDepositInfo | null;
  open_proposal_submission: boolean;
}
export interface CheckedDepositInfo {
  amount: Uint128;
  denom: CheckedDenom;
  refund_policy: DepositRefundPolicy;
  [k: string]: unknown;
}
export interface DepositInfoResponse {
  deposit_info?: CheckedDepositInfo | null;
  proposer: Addr;
  [k: string]: unknown;
}
export type Binary = string;
export interface CwdPreProposeOverruleReadOnlyInterface {
  proposalModule: () => Promise<any>;
  dao: () => Promise<any>;
  config: () => Promise<any>;
  depositInfo: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<any>;
  queryExtension: ({
    msg
  }: {
    msg: QueryExt;
  }) => Promise<any>;
}
export class CwdPreProposeOverruleQueryContract extends Contract implements CwdPreProposeOverruleReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.proposalModule = this.proposalModule.bind(this);
    this.dao = this.dao.bind(this);
    this.config = this.config.bind(this);
    this.depositInfo = this.depositInfo.bind(this);
    this.queryExtension = this.queryExtension.bind(this);
  }
  proposalModule = async (): Promise<any> => {
    return this.queryMsg({
      proposal_module: {}
    });
  };
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
  depositInfo = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<any> => {
    return this.queryMsg({
      deposit_info: {
        proposal_id: proposalId
      }
    });
  };
  queryExtension = async ({
    msg
  }: {
    msg: QueryExt;
  }): Promise<any> => {
    return this.queryMsg({
      query_extension: {
        msg
      }
    });
  };
}
export interface CwdPreProposeOverruleInterface extends CwdPreProposeOverruleReadOnlyInterface {
  propose: ({
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
    msg
  }: {
    msg: ProposeMessage;
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
    depositInfo,
    openProposalSubmission
  }: {
    depositInfo: UncheckedDepositInfo | null;
    openProposalSubmission: boolean;
  }) => Promise<any>;
  withdraw: ({
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
    denom
  }: {
    denom: UncheckedDenom | null;
  }) => Promise<any>;
  proposalCreatedHook: ({
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
    proposalId,
    proposer
  }: {
    proposalId: number;
    proposer: string;
  }) => Promise<any>;
  proposalCompletedHook: ({
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
    newStatus,
    proposalId
  }: {
    newStatus: Status;
    proposalId: number;
  }) => Promise<any>;
}
export class CwdPreProposeOverruleContract extends CwdPreProposeOverruleQueryContract implements CwdPreProposeOverruleInterface {
  constructor(instantiateTag?: string) {
    super("cwd_pre_propose_overrule", instantiateTag);
    this.propose = this.propose.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.proposalCreatedHook = this.proposalCreatedHook.bind(this);
    this.proposalCompletedHook = this.proposalCompletedHook.bind(this);
  }
  propose = async ({
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
    msg
  }: {
    msg: ProposeMessage;
  }): Promise<any> => {
    return await this.executeMsg({
      propose: {
        msg
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
    depositInfo,
    openProposalSubmission
  }: {
    depositInfo: UncheckedDepositInfo | null;
    openProposalSubmission: boolean;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        deposit_info: depositInfo,
        open_proposal_submission: openProposalSubmission
      }
    }, account, customFees, memo, transferAmount);
  };
  withdraw = async ({
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
    denom
  }: {
    denom: UncheckedDenom | null;
  }): Promise<any> => {
    return await this.executeMsg({
      withdraw: {
        denom
      }
    }, account, customFees, memo, transferAmount);
  };
  proposalCreatedHook = async ({
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
    proposalId,
    proposer
  }: {
    proposalId: number;
    proposer: string;
  }): Promise<any> => {
    return await this.executeMsg({
      proposal_created_hook: {
        proposal_id: proposalId,
        proposer
      }
    }, account, customFees, memo, transferAmount);
  };
  proposalCompletedHook = async ({
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
    newStatus,
    proposalId
  }: {
    newStatus: Status;
    proposalId: number;
  }): Promise<any> => {
    return await this.executeMsg({
      proposal_completed_hook: {
        new_status: newStatus,
        proposal_id: proposalId
      }
    }, account, customFees, memo, transferAmount);
  };
}