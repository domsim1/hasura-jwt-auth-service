export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Channel_Members = {
  __typename?: 'channel_members';
  accepted: Scalars['Boolean'];
  channel: Scalars['uuid'];
  channelByChannel: Channels;
  character?: Maybe<Scalars['uuid']>;
  characterByCharacter?: Maybe<Characters>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  member_email: Scalars['String'];
  owner: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  userByEmail: Users;
  userByOwner: Users;
};

export type Channel_Members_Aggregate = {
  __typename?: 'channel_members_aggregate';
  aggregate?: Maybe<Channel_Members_Aggregate_Fields>;
  nodes: Array<Channel_Members>;
};

export type Channel_Members_Aggregate_Fields = {
  __typename?: 'channel_members_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Members_Max_Fields>;
  min?: Maybe<Channel_Members_Min_Fields>;
};

export type Channel_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Channel_Members_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Members_Max_Order_By>;
  min?: Maybe<Channel_Members_Min_Order_By>;
};

export type Channel_Members_Arr_Rel_Insert_Input = {
  data: Array<Channel_Members_Insert_Input>;
  on_conflict?: Maybe<Channel_Members_On_Conflict>;
};

export type Channel_Members_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Members_Bool_Exp>>>;
  _not?: Maybe<Channel_Members_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Members_Bool_Exp>>>;
  accepted?: Maybe<Boolean_Comparison_Exp>;
  channel?: Maybe<Uuid_Comparison_Exp>;
  channelByChannel?: Maybe<Channels_Bool_Exp>;
  character?: Maybe<Uuid_Comparison_Exp>;
  characterByCharacter?: Maybe<Characters_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  member_email?: Maybe<Text_Comparison_Exp>;
  owner?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  userByEmail?: Maybe<Users_Bool_Exp>;
  userByOwner?: Maybe<Users_Bool_Exp>;
};

export enum Channel_Members_Constraint {
  ChannelMembersIdKey = 'channel_members_id_key',
  ChannelMembersPkey = 'channel_members_pkey',
}

export type Channel_Members_Insert_Input = {
  accepted?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<Scalars['uuid']>;
  channelByChannel?: Maybe<Channels_Obj_Rel_Insert_Input>;
  character?: Maybe<Scalars['uuid']>;
  characterByCharacter?: Maybe<Characters_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  member_email?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userByEmail?: Maybe<Users_Obj_Rel_Insert_Input>;
  userByOwner?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Channel_Members_Max_Fields = {
  __typename?: 'channel_members_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  member_email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Channel_Members_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  member_email?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Channel_Members_Min_Fields = {
  __typename?: 'channel_members_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  member_email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Channel_Members_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  member_email?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Channel_Members_Mutation_Response = {
  __typename?: 'channel_members_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Channel_Members>;
};

export type Channel_Members_Obj_Rel_Insert_Input = {
  data: Channel_Members_Insert_Input;
  on_conflict?: Maybe<Channel_Members_On_Conflict>;
};

export type Channel_Members_On_Conflict = {
  constraint: Channel_Members_Constraint;
  update_columns: Array<Channel_Members_Update_Column>;
};

export type Channel_Members_Order_By = {
  accepted?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channelByChannel?: Maybe<Channels_Order_By>;
  character?: Maybe<Order_By>;
  characterByCharacter?: Maybe<Characters_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  member_email?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userByEmail?: Maybe<Users_Order_By>;
  userByOwner?: Maybe<Users_Order_By>;
};

export enum Channel_Members_Select_Column {
  Accepted = 'accepted',
  Channel = 'channel',
  Character = 'character',
  CreatedAt = 'created_at',
  Id = 'id',
  MemberEmail = 'member_email',
  Owner = 'owner',
  UpdatedAt = 'updated_at',
}

export type Channel_Members_Set_Input = {
  accepted?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<Scalars['uuid']>;
  character?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  member_email?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Channel_Members_Update_Column {
  Accepted = 'accepted',
  Channel = 'channel',
  Character = 'character',
  CreatedAt = 'created_at',
  Id = 'id',
  MemberEmail = 'member_email',
  Owner = 'owner',
  UpdatedAt = 'updated_at',
}

export type Channels = {
  __typename?: 'channels';
  channel_members: Array<Channel_Members>;
  channel_members_aggregate: Channel_Members_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  npcs: Array<Npcs>;
  npcs_aggregate: Npcs_Aggregate;
  owner: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user: Users;
};

export type ChannelsChannel_MembersArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type ChannelsChannel_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type ChannelsNpcsArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type ChannelsNpcs_AggregateArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type Channels_Aggregate = {
  __typename?: 'channels_aggregate';
  aggregate?: Maybe<Channels_Aggregate_Fields>;
  nodes: Array<Channels>;
};

export type Channels_Aggregate_Fields = {
  __typename?: 'channels_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channels_Max_Fields>;
  min?: Maybe<Channels_Min_Fields>;
};

export type Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Channels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channels_Max_Order_By>;
  min?: Maybe<Channels_Min_Order_By>;
};

export type Channels_Arr_Rel_Insert_Input = {
  data: Array<Channels_Insert_Input>;
  on_conflict?: Maybe<Channels_On_Conflict>;
};

export type Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channels_Bool_Exp>>>;
  _not?: Maybe<Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channels_Bool_Exp>>>;
  channel_members?: Maybe<Channel_Members_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  npcs?: Maybe<Npcs_Bool_Exp>;
  owner?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

export enum Channels_Constraint {
  ChannelPkey = 'channel_pkey',
  ChannelsIdKey = 'channels_id_key',
}

export type Channels_Insert_Input = {
  channel_members?: Maybe<Channel_Members_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  npcs?: Maybe<Npcs_Arr_Rel_Insert_Input>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Channels_Max_Fields = {
  __typename?: 'channels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Channels_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Channels_Min_Fields = {
  __typename?: 'channels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Channels_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Channels_Mutation_Response = {
  __typename?: 'channels_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Channels>;
};

export type Channels_Obj_Rel_Insert_Input = {
  data: Channels_Insert_Input;
  on_conflict?: Maybe<Channels_On_Conflict>;
};

export type Channels_On_Conflict = {
  constraint: Channels_Constraint;
  update_columns: Array<Channels_Update_Column>;
};

export type Channels_Order_By = {
  channel_members_aggregate?: Maybe<Channel_Members_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  npcs_aggregate?: Maybe<Npcs_Aggregate_Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

export enum Channels_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  UpdatedAt = 'updated_at',
}

export type Channels_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Channels_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  UpdatedAt = 'updated_at',
}

export type Characters = {
  __typename?: 'characters';
  age?: Maybe<Scalars['Int']>;
  channel_members: Array<Channel_Members>;
  channel_members_aggregate: Channel_Members_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  race?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  userByUser: Users;
};

export type CharactersChannel_MembersArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type CharactersChannel_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type Characters_Aggregate = {
  __typename?: 'characters_aggregate';
  aggregate?: Maybe<Characters_Aggregate_Fields>;
  nodes: Array<Characters>;
};

export type Characters_Aggregate_Fields = {
  __typename?: 'characters_aggregate_fields';
  avg?: Maybe<Characters_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Characters_Max_Fields>;
  min?: Maybe<Characters_Min_Fields>;
  stddev?: Maybe<Characters_Stddev_Fields>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Fields>;
  sum?: Maybe<Characters_Sum_Fields>;
  var_pop?: Maybe<Characters_Var_Pop_Fields>;
  var_samp?: Maybe<Characters_Var_Samp_Fields>;
  variance?: Maybe<Characters_Variance_Fields>;
};

export type Characters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Characters_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Characters_Aggregate_Order_By = {
  avg?: Maybe<Characters_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Characters_Max_Order_By>;
  min?: Maybe<Characters_Min_Order_By>;
  stddev?: Maybe<Characters_Stddev_Order_By>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Order_By>;
  sum?: Maybe<Characters_Sum_Order_By>;
  var_pop?: Maybe<Characters_Var_Pop_Order_By>;
  var_samp?: Maybe<Characters_Var_Samp_Order_By>;
  variance?: Maybe<Characters_Variance_Order_By>;
};

export type Characters_Arr_Rel_Insert_Input = {
  data: Array<Characters_Insert_Input>;
  on_conflict?: Maybe<Characters_On_Conflict>;
};

export type Characters_Avg_Fields = {
  __typename?: 'characters_avg_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Avg_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Characters_Bool_Exp>>>;
  _not?: Maybe<Characters_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Characters_Bool_Exp>>>;
  age?: Maybe<Integer_Comparison_Exp>;
  channel_members?: Maybe<Channel_Members_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  race?: Maybe<Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
  userByUser?: Maybe<Users_Bool_Exp>;
};

export enum Characters_Constraint {
  CharactersIdKey = 'characters_id_key',
  CharactersPkey = 'characters_pkey',
}

export type Characters_Inc_Input = {
  age?: Maybe<Scalars['Int']>;
};

export type Characters_Insert_Input = {
  age?: Maybe<Scalars['Int']>;
  channel_members?: Maybe<Channel_Members_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
  userByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Characters_Max_Fields = {
  __typename?: 'characters_max_fields';
  age?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Characters_Max_Order_By = {
  age?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  race?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Characters_Min_Fields = {
  __typename?: 'characters_min_fields';
  age?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Characters_Min_Order_By = {
  age?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  race?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Characters_Mutation_Response = {
  __typename?: 'characters_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Characters>;
};

export type Characters_Obj_Rel_Insert_Input = {
  data: Characters_Insert_Input;
  on_conflict?: Maybe<Characters_On_Conflict>;
};

export type Characters_On_Conflict = {
  constraint: Characters_Constraint;
  update_columns: Array<Characters_Update_Column>;
};

export type Characters_Order_By = {
  age?: Maybe<Order_By>;
  channel_members_aggregate?: Maybe<Channel_Members_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  race?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
  userByUser?: Maybe<Users_Order_By>;
};

export enum Characters_Select_Column {
  Age = 'age',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Race = 'race',
  UpdatedAt = 'updated_at',
  User = 'user',
}

export type Characters_Set_Input = {
  age?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

export type Characters_Stddev_Fields = {
  __typename?: 'characters_stddev_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Stddev_Pop_Fields = {
  __typename?: 'characters_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Stddev_Samp_Fields = {
  __typename?: 'characters_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Sum_Fields = {
  __typename?: 'characters_sum_fields';
  age?: Maybe<Scalars['Int']>;
};

export type Characters_Sum_Order_By = {
  age?: Maybe<Order_By>;
};

export enum Characters_Update_Column {
  Age = 'age',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Race = 'race',
  UpdatedAt = 'updated_at',
  User = 'user',
}

export type Characters_Var_Pop_Fields = {
  __typename?: 'characters_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Var_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Var_Samp_Fields = {
  __typename?: 'characters_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Var_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

export type Characters_Variance_Fields = {
  __typename?: 'characters_variance_fields';
  age?: Maybe<Scalars['Float']>;
};

export type Characters_Variance_Order_By = {
  age?: Maybe<Order_By>;
};

export enum Conflict_Action {
  Ignore = 'ignore',
  Update = 'update',
}

export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_channel_members?: Maybe<Channel_Members_Mutation_Response>;
  delete_channels?: Maybe<Channels_Mutation_Response>;
  delete_characters?: Maybe<Characters_Mutation_Response>;
  delete_npcs?: Maybe<Npcs_Mutation_Response>;
  delete_users?: Maybe<Users_Mutation_Response>;
  insert_channel_members?: Maybe<Channel_Members_Mutation_Response>;
  insert_channels?: Maybe<Channels_Mutation_Response>;
  insert_characters?: Maybe<Characters_Mutation_Response>;
  insert_npcs?: Maybe<Npcs_Mutation_Response>;
  insert_users?: Maybe<Users_Mutation_Response>;
  update_channel_members?: Maybe<Channel_Members_Mutation_Response>;
  update_channels?: Maybe<Channels_Mutation_Response>;
  update_characters?: Maybe<Characters_Mutation_Response>;
  update_npcs?: Maybe<Npcs_Mutation_Response>;
  update_users?: Maybe<Users_Mutation_Response>;
};

export type Mutation_RootDelete_Channel_MembersArgs = {
  where: Channel_Members_Bool_Exp;
};

export type Mutation_RootDelete_ChannelsArgs = {
  where: Channels_Bool_Exp;
};

export type Mutation_RootDelete_CharactersArgs = {
  where: Characters_Bool_Exp;
};

export type Mutation_RootDelete_NpcsArgs = {
  where: Npcs_Bool_Exp;
};

export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

export type Mutation_RootInsert_Channel_MembersArgs = {
  objects: Array<Channel_Members_Insert_Input>;
  on_conflict?: Maybe<Channel_Members_On_Conflict>;
};

export type Mutation_RootInsert_ChannelsArgs = {
  objects: Array<Channels_Insert_Input>;
  on_conflict?: Maybe<Channels_On_Conflict>;
};

export type Mutation_RootInsert_CharactersArgs = {
  objects: Array<Characters_Insert_Input>;
  on_conflict?: Maybe<Characters_On_Conflict>;
};

export type Mutation_RootInsert_NpcsArgs = {
  objects: Array<Npcs_Insert_Input>;
  on_conflict?: Maybe<Npcs_On_Conflict>;
};

export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Mutation_RootUpdate_Channel_MembersArgs = {
  _set?: Maybe<Channel_Members_Set_Input>;
  where: Channel_Members_Bool_Exp;
};

export type Mutation_RootUpdate_ChannelsArgs = {
  _set?: Maybe<Channels_Set_Input>;
  where: Channels_Bool_Exp;
};

export type Mutation_RootUpdate_CharactersArgs = {
  _inc?: Maybe<Characters_Inc_Input>;
  _set?: Maybe<Characters_Set_Input>;
  where: Characters_Bool_Exp;
};

export type Mutation_RootUpdate_NpcsArgs = {
  _set?: Maybe<Npcs_Set_Input>;
  where: Npcs_Bool_Exp;
};

export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type Npcs = {
  __typename?: 'npcs';
  channel: Scalars['uuid'];
  channelByChannel: Channels;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type Npcs_Aggregate = {
  __typename?: 'npcs_aggregate';
  aggregate?: Maybe<Npcs_Aggregate_Fields>;
  nodes: Array<Npcs>;
};

export type Npcs_Aggregate_Fields = {
  __typename?: 'npcs_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Npcs_Max_Fields>;
  min?: Maybe<Npcs_Min_Fields>;
};

export type Npcs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Npcs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Npcs_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Npcs_Max_Order_By>;
  min?: Maybe<Npcs_Min_Order_By>;
};

export type Npcs_Arr_Rel_Insert_Input = {
  data: Array<Npcs_Insert_Input>;
  on_conflict?: Maybe<Npcs_On_Conflict>;
};

export type Npcs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Npcs_Bool_Exp>>>;
  _not?: Maybe<Npcs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Npcs_Bool_Exp>>>;
  channel?: Maybe<Uuid_Comparison_Exp>;
  channelByChannel?: Maybe<Channels_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Npcs_Constraint {
  NpcsIdKey = 'npcs_id_key',
  NpcsPkey = 'npcs_pkey',
}

export type Npcs_Insert_Input = {
  channel?: Maybe<Scalars['uuid']>;
  channelByChannel?: Maybe<Channels_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Npcs_Max_Fields = {
  __typename?: 'npcs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Npcs_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Npcs_Min_Fields = {
  __typename?: 'npcs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Npcs_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Npcs_Mutation_Response = {
  __typename?: 'npcs_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Npcs>;
};

export type Npcs_Obj_Rel_Insert_Input = {
  data: Npcs_Insert_Input;
  on_conflict?: Maybe<Npcs_On_Conflict>;
};

export type Npcs_On_Conflict = {
  constraint: Npcs_Constraint;
  update_columns: Array<Npcs_Update_Column>;
};

export type Npcs_Order_By = {
  channel?: Maybe<Order_By>;
  channelByChannel?: Maybe<Channels_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Npcs_Select_Column {
  Channel = 'channel',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at',
}

export type Npcs_Set_Input = {
  channel?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Npcs_Update_Column {
  Channel = 'channel',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at',
}

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  channel_members: Array<Channel_Members>;
  channel_members_aggregate: Channel_Members_Aggregate;
  channel_members_by_pk?: Maybe<Channel_Members>;
  channels: Array<Channels>;
  channels_aggregate: Channels_Aggregate;
  channels_by_pk?: Maybe<Channels>;
  characters: Array<Characters>;
  characters_aggregate: Characters_Aggregate;
  characters_by_pk?: Maybe<Characters>;
  npcs: Array<Npcs>;
  npcs_aggregate: Npcs_Aggregate;
  npcs_by_pk?: Maybe<Npcs>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};

export type Query_RootChannel_MembersArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type Query_RootChannel_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type Query_RootChannel_Members_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootChannelsArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type Query_RootChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type Query_RootChannels_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Query_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Query_RootCharacters_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootNpcsArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type Query_RootNpcs_AggregateArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type Query_RootNpcs_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  channel_members: Array<Channel_Members>;
  channel_members_aggregate: Channel_Members_Aggregate;
  channel_members_by_pk?: Maybe<Channel_Members>;
  channels: Array<Channels>;
  channels_aggregate: Channels_Aggregate;
  channels_by_pk?: Maybe<Channels>;
  characters: Array<Characters>;
  characters_aggregate: Characters_Aggregate;
  characters_by_pk?: Maybe<Characters>;
  npcs: Array<Npcs>;
  npcs_aggregate: Npcs_Aggregate;
  npcs_by_pk?: Maybe<Npcs>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};

export type Subscription_RootChannel_MembersArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type Subscription_RootChannel_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type Subscription_RootChannel_Members_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootChannelsArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type Subscription_RootChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type Subscription_RootChannels_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Subscription_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Subscription_RootCharacters_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootNpcsArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type Subscription_RootNpcs_AggregateArgs = {
  distinct_on?: Maybe<Array<Npcs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Npcs_Order_By>>;
  where?: Maybe<Npcs_Bool_Exp>;
};

export type Subscription_RootNpcs_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Users = {
  __typename?: 'users';
  allowed_roles: Scalars['String'];
  channelMembersByOwner: Array<Channel_Members>;
  channelMembersByOwner_aggregate: Channel_Members_Aggregate;
  channel_members: Array<Channel_Members>;
  channel_members_aggregate: Channel_Members_Aggregate;
  channels: Array<Channels>;
  channels_aggregate: Channels_Aggregate;
  characters: Array<Characters>;
  characters_aggregate: Characters_Aggregate;
  created_at: Scalars['timestamptz'];
  default_role: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type UsersChannelMembersByOwnerArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type UsersChannelMembersByOwner_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type UsersChannel_MembersArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type UsersChannel_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Members_Order_By>>;
  where?: Maybe<Channel_Members_Bool_Exp>;
};

export type UsersChannelsArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type UsersChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};

export type UsersCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type UsersCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  allowed_roles?: Maybe<Text_Comparison_Exp>;
  channelMembersByOwner?: Maybe<Channel_Members_Bool_Exp>;
  channel_members?: Maybe<Channel_Members_Bool_Exp>;
  channels?: Maybe<Channels_Bool_Exp>;
  characters?: Maybe<Characters_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<Text_Comparison_Exp>;
  email?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Users_Constraint {
  UsersEmailKey = 'users_email_key',
  UsersIdKey = 'users_id_key',
  UsersPkey = 'users_pkey',
}

export type Users_Insert_Input = {
  allowed_roles?: Maybe<Scalars['String']>;
  channelMembersByOwner?: Maybe<Channel_Members_Arr_Rel_Insert_Input>;
  channel_members?: Maybe<Channel_Members_Arr_Rel_Insert_Input>;
  channels?: Maybe<Channels_Arr_Rel_Insert_Input>;
  characters?: Maybe<Characters_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  allowed_roles?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
  allowed_roles?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  allowed_roles?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
  allowed_roles?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

export type Users_Order_By = {
  allowed_roles?: Maybe<Order_By>;
  channelMembersByOwner_aggregate?: Maybe<Channel_Members_Aggregate_Order_By>;
  channel_members_aggregate?: Maybe<Channel_Members_Aggregate_Order_By>;
  channels_aggregate?: Maybe<Channels_Aggregate_Order_By>;
  characters_aggregate?: Maybe<Characters_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Users_Select_Column {
  AllowedRoles = 'allowed_roles',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updated_at',
}

export type Users_Set_Input = {
  allowed_roles?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  AllowedRoles = 'allowed_roles',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updated_at',
}

export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
export type CreateUserMutationVariables = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CreateUserMutation = { __typename?: 'mutation_root' } & {
  insert_users: Maybe<
    { __typename?: 'users_mutation_response' } & {
      returning: Array<{ __typename?: 'users' } & Pick<Users, 'id'>>;
    }
  >;
};

export type GetUserByEmailQueryVariables = {
  email?: Maybe<Scalars['String']>;
};

export type GetUserByEmailQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'id' | 'password'>>;
};
