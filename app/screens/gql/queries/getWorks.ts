import { gql } from "@apollo/client";

export const GET_WORKS = gql`
  query Works($title: String, $after: String) {
    worksConnection(title: $title, after: $after) {
      nodes {
        key
        title
        authors {
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`;
