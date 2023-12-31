/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Autogenerated input type of AddWorkToBookcase */
export type AddWorkToBookcaseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  workKey: Scalars['String']['input'];
};

/** Autogenerated return type of AddWorkToBookcase. */
export type AddWorkToBookcasePayload = {
  __typename?: 'AddWorkToBookcasePayload';
  bookcase: Bookcase;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Author = {
  __typename?: 'Author';
  key: Scalars['String']['output'];
  links?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  olid: Scalars['String']['output'];
};

/** The connection type for Author. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AuthorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Author>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Author>;
};

export type Bookcase = {
  __typename?: 'Bookcase';
  id: Scalars['String']['output'];
  /** name of the bookcase */
  name: Scalars['String']['output'];
  /** id of the user the bookcase was made by */
  userId: Scalars['String']['output'];
  /** array of the work key */
  workKeys: Array<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateBookcase */
export type CreateBookcaseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated return type of CreateBookcase. */
export type CreateBookcasePayload = {
  __typename?: 'CreateBookcasePayload';
  bookcase: Bookcase;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Credential = {
  __typename?: 'Credential';
  accessToken: Scalars['String']['output'];
  client: Scalars['String']['output'];
  expiry: Scalars['Int']['output'];
  tokenType: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addWorkToBookcase?: Maybe<AddWorkToBookcasePayload>;
  createBookcase?: Maybe<CreateBookcasePayload>;
  removeWorkFromBookcase?: Maybe<RemoveWorkFromBookcasePayload>;
  userConfirmRegistrationWithToken?: Maybe<UserConfirmRegistrationWithTokenPayload>;
  userLogin?: Maybe<UserLoginPayload>;
  userLogout?: Maybe<UserLogoutPayload>;
  userRegister?: Maybe<UserRegisterPayload>;
  userResendConfirmationWithToken?: Maybe<UserResendConfirmationWithTokenPayload>;
  userSendPasswordResetWithToken?: Maybe<UserSendPasswordResetWithTokenPayload>;
  userUpdatePasswordWithToken?: Maybe<UserUpdatePasswordWithTokenPayload>;
};


export type MutationAddWorkToBookcaseArgs = {
  input: AddWorkToBookcaseInput;
};


export type MutationCreateBookcaseArgs = {
  input: CreateBookcaseInput;
};


export type MutationRemoveWorkFromBookcaseArgs = {
  input: RemoveWorkFromBookcaseInput;
};


export type MutationUserConfirmRegistrationWithTokenArgs = {
  confirmationToken: Scalars['String']['input'];
};


export type MutationUserLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserRegisterArgs = {
  confirmUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUserResendConfirmationWithTokenArgs = {
  confirmUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationUserSendPasswordResetWithTokenArgs = {
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationUserUpdatePasswordWithTokenArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  authorsConnection: AuthorConnection;
  /** The current logged in user */
  currentUser?: Maybe<User>;
  worksConnection: WorkConnection;
};


export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWorksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of RemoveWorkFromBookcase */
export type RemoveWorkFromBookcaseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  workKey: Scalars['String']['input'];
};

/** Autogenerated return type of RemoveWorkFromBookcase. */
export type RemoveWorkFromBookcasePayload = {
  __typename?: 'RemoveWorkFromBookcasePayload';
  bookcase: Bookcase;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  bookcase?: Maybe<Bookcase>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Autogenerated return type of UserConfirmRegistrationWithToken. */
export type UserConfirmRegistrationWithTokenPayload = {
  __typename?: 'UserConfirmRegistrationWithTokenPayload';
  authenticatable: User;
  /** Authentication credentials. Null unless user is signed in after confirmation. */
  credentials?: Maybe<Credential>;
};

/** Autogenerated return type of UserLogin. */
export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  authenticatable: User;
  credentials: Credential;
};

/** Autogenerated return type of UserLogout. */
export type UserLogoutPayload = {
  __typename?: 'UserLogoutPayload';
  authenticatable: User;
};

/** Autogenerated return type of UserRegister. */
export type UserRegisterPayload = {
  __typename?: 'UserRegisterPayload';
  authenticatable: User;
  /**
   * Authentication credentials. Null if after signUp resource is not active for
   * authentication (e.g. Email confirmation required).
   */
  credentials?: Maybe<Credential>;
};

/** Autogenerated return type of UserResendConfirmationWithToken. */
export type UserResendConfirmationWithTokenPayload = {
  __typename?: 'UserResendConfirmationWithTokenPayload';
  message: Scalars['String']['output'];
};

/** Autogenerated return type of UserSendPasswordResetWithToken. */
export type UserSendPasswordResetWithTokenPayload = {
  __typename?: 'UserSendPasswordResetWithTokenPayload';
  message: Scalars['String']['output'];
};

/** Autogenerated return type of UserUpdatePasswordWithToken. */
export type UserUpdatePasswordWithTokenPayload = {
  __typename?: 'UserUpdatePasswordWithTokenPayload';
  authenticatable: User;
  /** Authentication credentials. Resource must be signed_in for credentials to be returned. */
  credentials?: Maybe<Credential>;
};

export type Work = {
  __typename?: 'Work';
  authors: Array<Author>;
  covers: Array<Scalars['Int']['output']>;
  /** openlibrary ref string /works/OL10000000W */
  key: Scalars['String']['output'];
  olid: Scalars['String']['output'];
  revision: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

/** The connection type for Work. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', userLogin?: { __typename?: 'UserLoginPayload', authenticatable: { __typename?: 'User', id: string, bookcase?: { __typename?: 'Bookcase', name: string, workKeys: Array<string> } | null }, credentials: { __typename?: 'Credential', accessToken: string, client: string } } | null };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', userRegister?: { __typename?: 'UserRegisterPayload', authenticatable: { __typename?: 'User', id: string, bookcase?: { __typename?: 'Bookcase', name: string, workKeys: Array<string> } | null }, credentials?: { __typename?: 'Credential', accessToken: string } | null } | null };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', userLogout?: { __typename?: 'UserLogoutPayload', authenticatable: { __typename?: 'User', id: string } } | null };

export type AddWorkToBookcaseMutationVariables = Exact<{
  input: AddWorkToBookcaseInput;
}>;


export type AddWorkToBookcaseMutation = { __typename?: 'Mutation', addWorkToBookcase?: { __typename?: 'AddWorkToBookcasePayload', bookcase: { __typename?: 'Bookcase', name: string, workKeys: Array<string> } } | null };

export type CreateBookcaseMutationVariables = Exact<{
  input: CreateBookcaseInput;
}>;


export type CreateBookcaseMutation = { __typename?: 'Mutation', createBookcase?: { __typename?: 'CreateBookcasePayload', bookcase: { __typename?: 'Bookcase', name: string } } | null };

export type RemoveWorkFromBookcaseMutationVariables = Exact<{
  input: RemoveWorkFromBookcaseInput;
}>;


export type RemoveWorkFromBookcaseMutation = { __typename?: 'Mutation', removeWorkFromBookcase?: { __typename?: 'RemoveWorkFromBookcasePayload', bookcase: { __typename?: 'Bookcase', name: string, workKeys: Array<string> } } | null };

export type WorksQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type WorksQuery = { __typename?: 'Query', worksConnection: { __typename?: 'WorkConnection', nodes?: Array<{ __typename?: 'Work', key: string, olid: string, title: string, authors: Array<{ __typename?: 'Author', name: string, olid: string }> } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, startCursor?: string | null } } };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookcase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"workKeys"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"credentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"client"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirmation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"passwordConfirmation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirmation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookcase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"workKeys"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"credentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const AddWorkToBookcaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkToBookcase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWorkToBookcaseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkToBookcase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookcase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"workKeys"}}]}}]}}]}}]} as unknown as DocumentNode<AddWorkToBookcaseMutation, AddWorkToBookcaseMutationVariables>;
export const CreateBookcaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBookcase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBookcaseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBookcase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookcase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBookcaseMutation, CreateBookcaseMutationVariables>;
export const RemoveWorkFromBookcaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveWorkFromBookcase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveWorkFromBookcaseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeWorkFromBookcase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookcase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"workKeys"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveWorkFromBookcaseMutation, RemoveWorkFromBookcaseMutationVariables>;
export const WorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Works"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"olid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"olid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<WorksQuery, WorksQueryVariables>;