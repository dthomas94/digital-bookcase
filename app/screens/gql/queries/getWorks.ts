import { gql } from "@apollo/client";

export const GET_WORKS = gql`
  query Works($title: String) {
    worksConnection(title: $title) {
      nodes {
        key
        title
        authors {
          name
        }
      }
    }
  }
`;
