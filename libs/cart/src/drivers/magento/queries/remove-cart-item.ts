import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const removeCartItem = gql`
  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {
    removeItemFromCart(input: {
      cart_id: $cartId,
      cart_item_id: $itemId
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
