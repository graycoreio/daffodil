import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateCartItem = gql`
  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {
    updateCartItems(input: {
      cart_id: $cartId
      cart_items: [$input]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
