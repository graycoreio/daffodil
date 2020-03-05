import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const addCartItem = gql`
  mutation AddCartItem($cartId: String!, $input: MagentoCartItemInput!) {
    addSimpleProductsToCart(
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
    ) {
      ...cart
    }
  }
  ${cartFragment}
`;
