import { gql } from "@apollo/client";

export const GET_WORKS = gql`
  query Works($title: String) {
    works(title: $title) {
      lastModified
      data {
        title
        created
        lastModified
      }
      authors {
        data {
          name
        }
      }
    }
  }
`;
