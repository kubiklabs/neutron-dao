import { Contract, wasmKitTypes } from "@kubiklabs/wasmkit";
export type ExecuteMsg = {
  execute_proposal_hook: {
    msgs: CosmosMsg_for_NeutronMsg[];
    [k: string]: unknown;
  };
} | {
  pause: {
    duration: Duration;
    [k: string]: unknown;
  };
} | {
  remove_item: {
    key: string;
    [k: string]: unknown;
  };
} | {
  set_item: {
    addr: string;
    key: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    config: Config;
    [k: string]: unknown;
  };
} | {
  update_proposal_modules: {
    to_add: ModuleInstantiateInfo[];
    to_disable: string[];
    [k: string]: unknown;
  };
} | {
  update_voting_module: {
    module: ModuleInstantiateInfo;
    [k: string]: unknown;
  };
} | {
  update_sub_daos: {
    to_add: SubDao[];
    to_remove: string[];
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
export type Duration = {
  height: number;
} | {
  time: number;
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
export interface Config {
  dao_uri?: string | null;
  description: string;
  name: string;
  [k: string]: unknown;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
  [k: string]: unknown;
}
export interface SubDao {
  addr: string;
  charter?: string | null;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  dao_uri?: string | null;
  description: string;
  initial_items?: InitialItem[] | null;
  name: string;
  proposal_modules_instantiate_info: ModuleInstantiateInfo[];
  voting_registry_module_instantiate_info: ModuleInstantiateInfo;
  [k: string]: unknown;
}
export interface InitialItem {
  key: string;
  value: string;
  [k: string]: unknown;
}
export interface MigrateMsg {
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
} | {
  dump_state: {};
} | {
  get_item: {
    key: string;
  };
} | {
  list_items: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  proposal_modules: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  active_proposal_modules: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  pause_info: {};
} | {
  voting_module: {};
} | {
  list_sub_daos: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  get_sub_dao: {
    address: string;
  };
} | {
  dao_u_r_i: {};
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
export type ProposalModuleStatus = "Enabled" | "Disabled";
export type Array_of_ProposalModule = ProposalModule[];
export interface ProposalModule {
  address: Addr;
  prefix: string;
  status: ProposalModuleStatus;
  [k: string]: unknown;
}
export type Nullable_String = string | null;
export type PauseInfoResponse = {
  Paused: {
    expiration: Expiration;
    [k: string]: unknown;
  };
} | {
  Unpaused: {
    [k: string]: unknown;
  };
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export interface DumpStateResponse {
  active_proposal_module_count: number;
  config: Config;
  pause_info: PauseInfoResponse;
  proposal_modules: ProposalModule[];
  total_proposal_module_count: number;
  version: ContractVersion;
  voting_module: Addr;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export interface GetItemResponse {
  item?: string | null;
  [k: string]: unknown;
}
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export type Array_of_Tuple_of_String_and_String = [string, string][];
export type Array_of_SubDao = SubDao[];
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
export interface CwdCoreReadOnlyInterface {
  config: () => Promise<any>;
  dumpState: () => Promise<any>;
  getItem: ({
    key
  }: {
    key: string;
  }) => Promise<any>;
  listItems: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }) => Promise<any>;
  proposalModules: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }) => Promise<any>;
  activeProposalModules: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }) => Promise<any>;
  pauseInfo: () => Promise<any>;
  votingModule: () => Promise<any>;
  listSubDaos: ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }) => Promise<any>;
  getSubDao: ({
    address
  }: {
    address: string;
  }) => Promise<any>;
  daoURI: () => Promise<any>;
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
export class CwdCoreQueryContract extends Contract implements CwdCoreReadOnlyInterface {
  constructor(contractName: string, instantiateTag?: string) {
    super(contractName, instantiateTag);
    this.config = this.config.bind(this);
    this.dumpState = this.dumpState.bind(this);
    this.getItem = this.getItem.bind(this);
    this.listItems = this.listItems.bind(this);
    this.proposalModules = this.proposalModules.bind(this);
    this.activeProposalModules = this.activeProposalModules.bind(this);
    this.pauseInfo = this.pauseInfo.bind(this);
    this.votingModule = this.votingModule.bind(this);
    this.listSubDaos = this.listSubDaos.bind(this);
    this.getSubDao = this.getSubDao.bind(this);
    this.daoURI = this.daoURI.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.info = this.info.bind(this);
  }
  config = async (): Promise<any> => {
    return this.queryMsg({
      config: {}
    });
  };
  dumpState = async (): Promise<any> => {
    return this.queryMsg({
      dump_state: {}
    });
  };
  getItem = async ({
    key
  }: {
    key: string;
  }): Promise<any> => {
    return this.queryMsg({
      get_item: {
        key
      }
    });
  };
  listItems = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      list_items: {
        limit,
        start_after: startAfter
      }
    });
  };
  proposalModules = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      proposal_modules: {
        limit,
        start_after: startAfter
      }
    });
  };
  activeProposalModules = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      active_proposal_modules: {
        limit,
        start_after: startAfter
      }
    });
  };
  pauseInfo = async (): Promise<any> => {
    return this.queryMsg({
      pause_info: {}
    });
  };
  votingModule = async (): Promise<any> => {
    return this.queryMsg({
      voting_module: {}
    });
  };
  listSubDaos = async ({
    limit,
    startAfter
  }: {
    limit: number | null;
    startAfter: string | null;
  }): Promise<any> => {
    return this.queryMsg({
      list_sub_daos: {
        limit,
        start_after: startAfter
      }
    });
  };
  getSubDao = async ({
    address
  }: {
    address: string;
  }): Promise<any> => {
    return this.queryMsg({
      get_sub_dao: {
        address
      }
    });
  };
  daoURI = async (): Promise<any> => {
    return this.queryMsg({
      dao_u_r_i: {}
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
export interface CwdCoreInterface extends CwdCoreReadOnlyInterface {
  executeProposalHook: ({
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
    msgs
  }: {
    msgs: CosmosMsg_for_NeutronMsg[];
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
    duration: Duration;
  }) => Promise<any>;
  removeItem: ({
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
    key
  }: {
    key: string;
  }) => Promise<any>;
  setItem: ({
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
    addr,
    key
  }: {
    addr: string;
    key: string;
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
    config
  }: {
    config: Config;
  }) => Promise<any>;
  updateProposalModules: ({
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
    toAdd,
    toDisable
  }: {
    toAdd: ModuleInstantiateInfo[];
    toDisable: string[];
  }) => Promise<any>;
  updateVotingModule: ({
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
    module
  }: {
    module: ModuleInstantiateInfo;
  }) => Promise<any>;
  updateSubDaos: ({
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
    toAdd,
    toRemove
  }: {
    toAdd: SubDao[];
    toRemove: string[];
  }) => Promise<any>;
}
export class CwdCoreContract extends CwdCoreQueryContract implements CwdCoreInterface {
  constructor(instantiateTag?: string) {
    super("cwd_core", instantiateTag);
    this.executeProposalHook = this.executeProposalHook.bind(this);
    this.pause = this.pause.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateProposalModules = this.updateProposalModules.bind(this);
    this.updateVotingModule = this.updateVotingModule.bind(this);
    this.updateSubDaos = this.updateSubDaos.bind(this);
  }
  executeProposalHook = async ({
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
    msgs
  }: {
    msgs: CosmosMsg_for_NeutronMsg[];
  }): Promise<any> => {
    return await this.executeMsg({
      execute_proposal_hook: {
        msgs
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
    duration: Duration;
  }): Promise<any> => {
    return await this.executeMsg({
      pause: {
        duration
      }
    }, account, customFees, memo, transferAmount);
  };
  removeItem = async ({
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
    key
  }: {
    key: string;
  }): Promise<any> => {
    return await this.executeMsg({
      remove_item: {
        key
      }
    }, account, customFees, memo, transferAmount);
  };
  setItem = async ({
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
    addr,
    key
  }: {
    addr: string;
    key: string;
  }): Promise<any> => {
    return await this.executeMsg({
      set_item: {
        addr,
        key
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
    config
  }: {
    config: Config;
  }): Promise<any> => {
    return await this.executeMsg({
      update_config: {
        config
      }
    }, account, customFees, memo, transferAmount);
  };
  updateProposalModules = async ({
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
    toAdd,
    toDisable
  }: {
    toAdd: ModuleInstantiateInfo[];
    toDisable: string[];
  }): Promise<any> => {
    return await this.executeMsg({
      update_proposal_modules: {
        to_add: toAdd,
        to_disable: toDisable
      }
    }, account, customFees, memo, transferAmount);
  };
  updateVotingModule = async ({
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
    module
  }: {
    module: ModuleInstantiateInfo;
  }): Promise<any> => {
    return await this.executeMsg({
      update_voting_module: {
        module
      }
    }, account, customFees, memo, transferAmount);
  };
  updateSubDaos = async ({
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
    toAdd,
    toRemove
  }: {
    toAdd: SubDao[];
    toRemove: string[];
  }): Promise<any> => {
    return await this.executeMsg({
      update_sub_daos: {
        to_add: toAdd,
        to_remove: toRemove
      }
    }, account, customFees, memo, transferAmount);
  };
}