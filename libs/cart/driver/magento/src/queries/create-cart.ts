import { gql } from '@damienwebdev/apollo-angular';


export const createCart = gql`
  mutation MagentoCreateCart {
    createEmptyCart
  }
`;
