import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      authenticatable {
        id
      }
      credentials {
        accessToken
        client
      }
    }
  }
`;
