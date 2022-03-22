import { gql } from '@damienwebdev/apollo-angular';


export const revokeCustomerTokenMutation = gql`
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`;
