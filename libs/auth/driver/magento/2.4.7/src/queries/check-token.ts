import { gql } from 'apollo-angular';


export const checkTokenQuery = gql`
  query MagentoCheckToken {
    customer {
      email
    }
  }
`;
