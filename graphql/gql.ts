/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n        client\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation RegisterUser(\n    $email: String!\n    $password: String!\n    $passwordConfirmation: String!\n  ) {\n    userRegister(\n      email: $email\n      password: $password\n      passwordConfirmation: $passwordConfirmation\n    ) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation LogoutUser {\n    userLogout {\n      authenticatable {\n        id\n      }\n    }\n  }\n": types.LogoutUserDocument,
    "\n  mutation AddWorkToBookcase($input: AddWorkToBookcaseInput!) {\n    addWorkToBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n": types.AddWorkToBookcaseDocument,
    "\n  mutation CreateBookcase($input: CreateBookcaseInput!) {\n    createBookcase(input: $input) {\n      bookcase {\n        name\n      }\n    }\n  }\n": types.CreateBookcaseDocument,
    "\n  mutation RemoveWorkFromBookcase($input: RemoveWorkFromBookcaseInput!) {\n    removeWorkFromBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n": types.RemoveWorkFromBookcaseDocument,
    "\n  query Works($title: String, $after: String) {\n    worksConnection(title: $title, after: $after) {\n      nodes {\n        key\n        olid\n        title\n        authors {\n          name\n          olid\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        startCursor\n      }\n    }\n  }\n": types.WorksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n        client\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n        client\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser(\n    $email: String!\n    $password: String!\n    $passwordConfirmation: String!\n  ) {\n    userRegister(\n      email: $email\n      password: $password\n      passwordConfirmation: $passwordConfirmation\n    ) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser(\n    $email: String!\n    $password: String!\n    $passwordConfirmation: String!\n  ) {\n    userRegister(\n      email: $email\n      password: $password\n      passwordConfirmation: $passwordConfirmation\n    ) {\n      authenticatable {\n        id\n        bookcase {\n          name\n          workKeys\n        }\n      }\n      credentials {\n        accessToken\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    userLogout {\n      authenticatable {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    userLogout {\n      authenticatable {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddWorkToBookcase($input: AddWorkToBookcaseInput!) {\n    addWorkToBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkToBookcase($input: AddWorkToBookcaseInput!) {\n    addWorkToBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBookcase($input: CreateBookcaseInput!) {\n    createBookcase(input: $input) {\n      bookcase {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBookcase($input: CreateBookcaseInput!) {\n    createBookcase(input: $input) {\n      bookcase {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveWorkFromBookcase($input: RemoveWorkFromBookcaseInput!) {\n    removeWorkFromBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveWorkFromBookcase($input: RemoveWorkFromBookcaseInput!) {\n    removeWorkFromBookcase(input: $input) {\n      bookcase {\n        name\n        workKeys\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Works($title: String, $after: String) {\n    worksConnection(title: $title, after: $after) {\n      nodes {\n        key\n        olid\n        title\n        authors {\n          name\n          olid\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query Works($title: String, $after: String) {\n    worksConnection(title: $title, after: $after) {\n      nodes {\n        key\n        olid\n        title\n        authors {\n          name\n          olid\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        startCursor\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;