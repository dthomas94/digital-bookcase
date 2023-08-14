import { gql } from "@apollo/client";

export const CREATE_BOOKCASE = gql`
  mutation CreateBookcase($input: CreateBookcaseInput!) {
    createBookcase(input: $input) {
      bookcase {
        name
      }
    }
  }
`;
