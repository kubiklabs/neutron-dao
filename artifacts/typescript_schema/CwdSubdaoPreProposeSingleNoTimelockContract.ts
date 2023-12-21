import { Contract, wasmKitTypes } from "@kubiklabs/wasmkit";
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
  propose: {
    description: string;
    msgs: CosmosMsg_for_NeutronMsg[];
    title: string;
    [k: string]: unknown;
  };
};
export type CosmosMsg_for_NeutronMsg = {
  bank: BankMsg;
} | {
  custom: NeutronMsg;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  stargate: {
    type_url: string;
    value: Binary;
    [k: string]: unknown;
  };
} | {
  ibc: IbcMsg;
} | {
  wasm: WasmMsg;
} | {
  gov: GovMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type NeutronMsg = {
  register_interchain_account: {
    connection_id: string;
    interchain_account_id: string;
    [k: string]: unknown;
  };
} | {
  submit_tx: {
    connection_id: string;
    fee: IbcFee;
    interchain_account_id: string;
    memo: string;
    msgs: ProtobufAny[];
    timeout: number;
    [k: string]: unknown;
  };
} | {
  register_interchain_query: {
    connection_id: string;
    keys: KVKey[];
    query_type: string;
    transactions_filter: string;
    update_period: number;
    [k: string]: unknown;
  };
} | {
  update_interchain_query: {
    new_keys?: KVKey[] | null;
    new_transactions_filter?: string | null;
    new_update_period?: number | null;
    query_id: number;
    [k: string]: unknown;
  };
} | {
  remove_interchain_query: {
    query_id: number;
    [k: string]: unknown;
  };
} | {
  ibc_transfer: {
    fee: IbcFee;
    memo: string;
    receiver: string;
    sender: string;
    source_channel: string;
    source_port: string;
    timeout_height: RequestPacketTimeoutHeight;
    timeout_timestamp: number;
    token: Coin;
    [k: string]: unknown;
  };
} | {
  submit_admin_proposal: {
    admin_proposal: AdminProposal;
    [k: string]: unknown;
  };
} | {
  create_denom: {
    subdenom: string;
    [k: string]: unknown;
  };
} | {
  change_admin: {
    denom: string;
    new_admin_address: string;
    [k: string]: unknown;
  };
} | {
  mint_tokens: {
    amount: Uint128;
    denom: string;
    mint_to_address: string;
    [k: string]: unknown;
  };
} | {
  burn_tokens: {
    amount: Uint128;
    burn_from_address: string;
    denom: string;
    [k: string]: unknown;
  };
} | {
  add_schedule: {
    msgs: MsgExecuteContract[];
    name: string;
    period: number;
    [k: string]: unknown;
  };
} | {
  remove_schedule: {
    name: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type AdminProposal = {
  param_change_proposal: ParamChangeProposal;
} | {
  software_upgrade_proposal: SoftwareUpgradeProposal;
} | {
  cancel_software_upgrade_proposal: CancelSoftwareUpgradeProposal;
} | {
  upgrade_proposal: UpgradeProposal;
} | {
  client_update_proposal: ClientUpdateProposal;
} | {
  pin_codes_proposal: PinCodesProposal;
} | {
  unpin_codes_proposal: UnpinCodesProposal;
} | {
  sudo_contract_proposal: SudoContractProposal;
} | {
  update_admin_proposal: UpdateAdminProposal;
} | {
  clear_admin_proposal: ClearAdminProposal;
};
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type IbcMsg = {
  transfer: {
    amount: Coin;
    channel_id: string;
    timeout: IbcTimeout;
    to_address: string;
    [k: string]: unknown;
  };
} | {
  send_packet: {
    channel_id: string;
    data: Binary;
    timeout: IbcTimeout;
    [k: string]: unknown;
  };
} | {
  close_channel: {
    channel_id: string;
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type GovMsg = {
  vote: {
    proposal_id: number;
    vote: VoteOption;
    [k: string]: unknown;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
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
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface IbcFee {
  ack_fee: Coin[];
  recv_fee: Coin[];
  timeout_fee: Coin[];
  [k: string]: unknown;
}
export interface ProtobufAny {
  type_url: string;
  value: Binary;
  [k: string]: unknown;
}
export interface KVKey {
  key: Binary;
  path: string;
  [k: string]: unknown;
}
export interface RequestPacketTimeoutHeight {
  revision_height?: number | null;
  revision_number?: number | null;
  [k: string]: unknown;
}
export interface ParamChangeProposal {
  description: string;
  param_changes: ParamChange[];
  title: string;
  [k: string]: unknown;
}
export interface ParamChange {
  key: string;
  subspace: string;
  value: string;
  [k: string]: unknown;
}
export interface SoftwareUpgradeProposal {
  description: string;
  plan: Plan;
  title: string;
  [k: string]: unknown;
}
export interface Plan {
  height: number;
  info: string;
  name: string;
  [k: string]: unknown;
}
export interface CancelSoftwareUpgradeProposal {
  description: string;
  title: string;
  [k: string]: unknown;
}
export interface UpgradeProposal {
  description: string;
  plan: Plan;
  title: string;
  upgraded_client_state: ProtobufAny;
  [k: string]: unknown;
}
export interface ClientUpdateProposal {
  description: string;
  subject_client_id: string;
  substitute_client_id: string;
  title: string;
  [k: string]: unknown;
}
export interface PinCodesProposal {
  code_ids: number[];
  description: string;
  title: string;
  [k: string]: unknown;
}
export interface UnpinCodesProposal {
  code_ids: number[];
  description: string;
  title: string;
  [k: string]: unknown;
}
export interface SudoContractProposal {
  contract: string;
  description: string;
  msg: Binary;
  title: string;
  [k: string]: unknown;
}
export interface UpdateAdminProposal {
  contract: string;
  description: string;
  new_admin: string;
  title: string;
  [k: string]: unknown;
}
export interface ClearAdminProposal {
  contract: string;
  description: string;
  title: string;
  [k: string]: unknown;
}
export interface MsgExecuteContract {
  contract: string;
  msg: string;
  [k: string]: unknown;
}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
  [k: string]: unknown;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
  [k: string]: unknown;
}
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
    msg: Empty;
  };
};
export interface Empty {
  [k: string]: unknown;
}
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
export interface CwdSubdaoPreProposeSingleNoTimelockReadOnlyInterface {
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
    msg: Empty;
  }) => Promise<any>;
}
export class CwdSubdaoPreProposeSingleNoTimelockQueryContract extends Contract implements CwdSubdaoPreProposeSingleNoTimelockReadOnlyInterface {
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
    msg: Empty;
  }): Promise<any> => {
    return this.queryMsg({
      query_extension: {
        msg
      }
    });
  };
}
export interface CwdSubdaoPreProposeSingleNoTimelockInterface extends CwdSubdaoPreProposeSingleNoTimelockReadOnlyInterface {
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
export class CwdSubdaoPreProposeSingleNoTimelockContract extends CwdSubdaoPreProposeSingleNoTimelockQueryContract implements CwdSubdaoPreProposeSingleNoTimelockInterface {
  constructor(instantiateTag?: string) {
    super("cwd_subdao_pre_propose_single_no_timelock", instantiateTag);
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