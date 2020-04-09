import gql from 'graphql-tag';

export const checkTokenQuery = gql`
  query CheckToken {
    customer {
      id
    }
  }
`
