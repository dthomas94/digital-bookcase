import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      name
      email
      id
      jti
    }
  }
`;
