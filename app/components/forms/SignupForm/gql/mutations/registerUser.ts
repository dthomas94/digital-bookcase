import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    userRegister(
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      authenticatable {
        id
        bookcase {
          name
          workKeys
        }
      }
      credentials {
        accessToken
      }
    }
  }
`;
