import { gql } from "@apollo/client";

export const GET_WORKS = gql`
  query Works($title: String, $after: String) {
    worksConnection(title: $title, after: $after) {
      nodes {
        key
        olid
        title
        authors {
          name
          olid
        }
        covers
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`;
