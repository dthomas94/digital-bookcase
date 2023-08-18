import { gql } from "@apollo/client";

export const ADD_WORK_TO_BOOKCASE = gql`
  mutation AddWorkToBookcase($input: AddWorkToBookcaseInput!) {
    addWorkToBookcase(input: $input) {
      bookcase {
        name
        workKeys
      }
    }
  }
`;
