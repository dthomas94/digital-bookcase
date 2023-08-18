import { gql } from "@apollo/client";

export const REMOVE_WORK_FROM__BOOKCASE = gql`
  mutation RemoveWorkFromBookcase($input: RemoveWorkFromBookcaseInput!) {
    removeWorkFromBookcase(input: $input) {
      bookcase {
        name
        workKeys
      }
    }
  }
`;
