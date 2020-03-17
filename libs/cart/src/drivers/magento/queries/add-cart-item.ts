import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const addCartItem = gql`
  mutation AddCartItem($cartId: String!, $input: CartItemInput!) {
    addSimpleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
