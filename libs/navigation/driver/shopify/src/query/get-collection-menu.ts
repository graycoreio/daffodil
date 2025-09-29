import { gql } from 'apollo-angular';

export const getCollectionMenuQuery = gql`
  query GetCollectionMenu($handle: String!) {
    menu(handle: $handle) {
      id
      title
      items {
        id
        title
        url
        items {
          id
          title
          url
          items {
            id
            title
            url
          }
        }
      }
    }
  }
`;

export const getCollectionQuery = gql`
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
    }
  }
`;
