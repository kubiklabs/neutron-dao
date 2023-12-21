import { Contract, wasmKitTypes } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  propose: {
    description: string;
    msgs: CosmosMsg_for_NeutronMsg[];
    proposer?: string | null;
    title: string;
    [k: string]: unknown;
  };
} | {
  vote: {
    proposal_id: number;
    vote: Vote;
    [k: string]: unknown;
  };
} | {
  execute: {
    proposal_id: number;
    [k: string]: unknown;
  };
} | {
  close: {
    proposal_id: number;
    [k: string]: unknown;
  };
} | {
  update_config: {
    allow_revoting: boolean;
    close_proposal_on_execution_failure: boolean;
    dao: string;
    max_voting_period: Duration;
    min_voting_period?: Duration | null;
    threshold: Threshold;
    [k: string]: unknown;
  };
} | {
  update_pre_propose_info: {
    info: PreProposeInfo;
    [k: string]: unknown;
  };
} | {
  add_proposal_hook: {
    address: string;
    [k: string]: unknown;
  };
} | {
  remove_proposal_hook: {
    address: string;
    [k: string]: unknown;
  };
} | {
  add_vote_hook: {
    address: string;
    [k: string]: unknown;
  };
} | {
  remove_vote_hook: {
    address: string;
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
export type Vote = "yes" | "no" | "abstain";
export type Duration = {
  height: number;
} | {
  time: number;
};
export type Threshold = {
  absolute_percentage: {
    percentage: PercentageThreshold;
    [k: string]: unknown;
  };
} | {
  threshold_quorum: {
    quorum: PercentageThreshold;
    threshold: PercentageThreshold;
    [k: string]: unknown;
  };
} | {
  absolute_count: {
    threshold: Uint128;
    [k: string]: unknown;
  };
};
export type PercentageThreshold = {
  majority: {
    [k: string]: unknown;
  };
} | {
  percent: Decimal;
};
export type Decimal = string;
export type PreProposeInfo = {
  anyone_may_propose: {
    [k: string]: unknown;
  };
} | {
  module_may_propose: {
    info: ModuleInstantiateInfo;
    [k: string]: unknown;
  };
};
export type Admin = {
  address: {
    addr: string;
    [k: string]: unknown;
  };
} | {
  core_module: {
    [k: string]: unknown;
  };
};
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
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  allow_revoting: boolean;
  close_proposal_on_execution_failure: boolean;
  max_voting_period: Duration;
  min_voting_period?: Duration | null;
  pre_propose_info: PreProposeInfo;
  threshold: Threshold;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
} | {
  proposal: {
    proposal_id: number;
  };
} | {
  list_proposals: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  reverse_proposals: {
    limit?: number | null;
    start_before?: number | null;
  };
} | {
  proposal_count: {};
} | {
  get_vote: {
    proposal_id: number;
    voter: string;
  };
} | {
  list_votes: {
    limit?: number | null;
    proposal_id: number;
    start_after?: string | null;
  };
} | {
  proposal_creation_policy: {};
} | {
  proposal_hooks: {};
} | {
  vote_hooks: {};
} | {
  dao: {};
} | {
  info: {};
};
export type Addr = string;
export interface Config {
  allow_revoting: boolean;
  close_proposal_on_execution_failure: boolean;
  dao: Addr;
  max_voting_period: Duration;
  min_voting_period?: Duration | null;
  threshold: Threshold;
  [k: string]: unknown;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
  [k: string]: unknown;
}
export interface VoteInfo {
  power: Uint128;
  vote: Vote;
  voter: Addr;
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
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Status = "open" | "rejected" | "passed" | "executed" | "closed" | "execution_failed";
export interface ProposalListResponse {
  proposals: ProposalResponse[];
  [k: string]: unknown;
}
export interface ProposalResponse {
  id: number;
  proposal: SingleChoiceProposal;
  [k: string]: unknown;
}
export interface SingleChoiceProposal {
  allow_revoting: boolean;
  description: string;
  expiration: Expiration;
  min_voting_period?: Expiration | null;
  msgs: CosmosMsg_for_NeutronMsg[];
  proposer: Addr;
  start_height: number;
  status: Status;
  threshold: Threshold;
  title: string;
  total_power: Uint128;
  votes: Votes;
  [k: string]: unknown;
}
export interface Votes {
  abstain: Uint128;
  no: Uint128;
  yes: Uint128;
  [k: string]: unknown;
}
export interface VoteListResponse {
  votes: VoteInfo[];
  [k: string]: unknown;
}
export type uint64 = number;
export type ProposalCreationPolicy = {
  Anyone: {
    [k: string]: unknown;
  };
} | {
  Module: {
    addr: Addr;
    [k: string]: unknown;
  };
};
export interface HooksResponse {
  hooks: string[];
  [k: string]: unknown;
}
export interface CwdSubdaoProposalSingleReadOnlyInterface {
  config: () => Promise<any>;
  proposal: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<any>;
  listProposals: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: number | null;
  }) => Promise<any>;
  reverseProposals: ({
    limit,
    startBefore
  }: {
    limit: number | null;
    startBefore: number | null;
  }) => Promise<any>;
  proposalCount: () => Promise<any>;
  getVote: ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }) => Promise<any>;
  listVotes: ({
    limit,
    proposalId,
    startAfter
  }: {
    limit: number | null;
    proposalId: number;
    startAfter: string | null;
  }) => Promise<any>;
  proposalCreationPolicy: () => Promise<any>;
  proposalHooks: () => Promise<any>;
  voteHooks: () => Promise<any>;
  dao: () => Promise<any>;
  info: () => Promise<any>;
}
export class CwdSubdaoProposalSingleQueryContract extends Contract implements CwdSubdaoProposalSingleReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.config = this.config.bind(this);
    this.proposal = this.proposal.bind(this);
    this.listProposals = this.listProposals.bind(this);
    this.reverseProposals = this.reverseProposals.bind(this);
    this.proposalCount = this.proposalCount.bind(this);
    this.getVote = this.getVote.bind(this);
    this.listVotes = this.listVotes.bind(this);
    this.proposalCreationPolicy = this.proposalCreationPolicy.bind(this);
    this.proposalHooks = this.proposalHooks.bind(this);
    this.voteHooks = this.voteHooks.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
  }
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
    });
  };
  proposal = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<any> => {
    return this.queryMsg({
      proposal: {
        proposal_id: proposalId
      }
    });
  };
  listProposals = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: number | null;
  }): Promise<any> => {
    return this.queryMsg({
      list_proposals: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseProposals = async ({
    limit,
    startBefore
  }: {
    limit: number | null;
    startBefore: number | null;
  }): Promise<any> => {
    return this.queryMsg({
      reverse_proposals: {
        limit,
        start_before: startBefore
      }
    });
  };
  proposalCount = async (): Promise<any> => {
    return this.queryMsg({
      proposal_count: {}
    });
  };
  getVote = async ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }): Promise<any> => {
    return this.queryMsg({
      get_vote: {
        proposal_id: proposalId,
        voter
      }
    });
  };
  listVotes = async ({
    limit,
    proposalId,
    startAfter
  }: {
    limit: number | null;
    proposalId: number;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter
      }
    });
  };
  proposalCreationPolicy = async (): Promise<any> => {
    return this.queryMsg({
      proposal_creation_policy: {}
    });
  };
  proposalHooks = async (): Promise<any> => {
    return this.queryMsg({
      proposal_hooks: {}
    });
  };
  voteHooks = async (): Promise<any> => {
    return this.queryMsg({
      vote_hooks: {}
    });
  };
  dao = async (): Promise<any> => {
    return this.queryMsg({
      dao: {}
    });
  };
  info = async (): Promise<any> => {
    return this.queryMsg({
      info: {}
    });
  };
}
export interface CwdSubdaoProposalSingleInterface extends CwdSubdaoProposalSingleReadOnlyInterface {
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
    description,
    msgs,
    proposer,
    title
  }: {
    description: string;
    msgs: CosmosMsg_for_NeutronMsg[];
    proposer: string | null;
    title: string;
  }) => Promise<any>;
  vote: ({
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
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }) => Promise<any>;
  execute: ({
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
    proposalId
  }: {
    proposalId: number;
  }) => Promise<any>;
  close: ({
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
    proposalId
  }: {
    proposalId: number;
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
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    threshold
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod: Duration | null;
    threshold: Threshold;
  }) => Promise<any>;
  updatePreProposeInfo: ({
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
    info
  }: {
    info: PreProposeInfo;
  }) => Promise<any>;
  addProposalHook: ({
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
    address
  }: {
    address: string;
  }) => Promise<any>;
  removeProposalHook: ({
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
    address
  }: {
    address: string;
  }) => Promise<any>;
  addVoteHook: ({
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
    address
  }: {
    address: string;
  }) => Promise<any>;
  removeVoteHook: ({
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
    address
  }: {
    address: string;
  }) => Promise<any>;
}
export class CwdSubdaoProposalSingleContract extends CwdSubdaoProposalSingleQueryContract implements CwdSubdaoProposalSingleInterface {
  constructor(instantiateTag?: string) {
    super("cwd_subdao_proposal_single", instantiateTag);
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updatePreProposeInfo = this.updatePreProposeInfo.bind(this);
    this.addProposalHook = this.addProposalHook.bind(this);
    this.removeProposalHook = this.removeProposalHook.bind(this);
    this.addVoteHook = this.addVoteHook.bind(this);
    this.removeVoteHook = this.removeVoteHook.bind(this);
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
    description,
    msgs,
    proposer,
    title
  }: {
    description: string;
    msgs: CosmosMsg_for_NeutronMsg[];
    proposer: string | null;
    title: string;
  }): Promise<any> => {
    return await this.executeMsg({
      propose: {
        description,
        msgs,
        proposer,
        title
      }
    }, account, customFees, memo, transferAmount);
  };
  vote = async ({
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
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }): Promise<any> => {
    return await this.executeMsg({
      vote: {
        proposal_id: proposalId,
        vote
      }
    }, account, customFees, memo, transferAmount);
  };
  execute = async ({
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
    proposalId
  }: {
    proposalId: number;
  }): Promise<any> => {
    return await this.executeMsg({
      execute: {
        proposal_id: proposalId
      }
    }, account, customFees, memo, transferAmount);
  };
  close = async ({
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
    proposalId
  }: {
    proposalId: number;
  }): Promise<any> => {
    return await this.executeMsg({
      close: {
        proposal_id: proposalId
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
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    threshold
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod: Duration | null;
    threshold: Threshold;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        allow_revoting: allowRevoting,
        close_proposal_on_execution_failure: closeProposalOnExecutionFailure,
        dao,
        max_voting_period: maxVotingPeriod,
        min_voting_period: minVotingPeriod,
        threshold
      }
    }, account, customFees, memo, transferAmount);
  };
  updatePreProposeInfo = async ({
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
    info
  }: {
    info: PreProposeInfo;
  }): Promise<any> => {
    return await this.executeMsg({
      update_pre_propose_info: {
        info
      }
    }, account, customFees, memo, transferAmount);
  };
  addProposalHook = async ({
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
    address
  }: {
    address: string;
  }): Promise<any> => {
    return await this.executeMsg({
      add_proposal_hook: {
        address
      }
    }, account, customFees, memo, transferAmount);
  };
  removeProposalHook = async ({
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
    address
  }: {
    address: string;
  }): Promise<any> => {
    return await this.executeMsg({
      remove_proposal_hook: {
        address
      }
    }, account, customFees, memo, transferAmount);
  };
  addVoteHook = async ({
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
    address
  }: {
    address: string;
  }): Promise<any> => {
    return await this.executeMsg({
      add_vote_hook: {
        address
      }
    }, account, customFees, memo, transferAmount);
  };
  removeVoteHook = async ({
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
    address
  }: {
    address: string;
  }): Promise<any> => {
    return await this.executeMsg({
      remove_vote_hook: {
        address
      }
    }, account, customFees, memo, transferAmount);
  };
}