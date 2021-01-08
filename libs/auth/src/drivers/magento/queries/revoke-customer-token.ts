import {gql} from 'apollo-angular';


export const revokeCustomerTokenMutation = gql`
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`;
