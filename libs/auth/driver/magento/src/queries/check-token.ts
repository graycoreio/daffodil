import { gql } from '@damienwebdev/apollo-angular';


export const checkTokenQuery = gql`
  query MagentoCheckToken {
    customer {
      id
    }
  }
`;
