import gql from 'graphql-tag';

export const revokeCustomerTokenMutation = gql`
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`;
