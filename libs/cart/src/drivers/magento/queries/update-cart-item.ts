import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const updateCartItem = gql`
  mutation UpdateCartItem($cartId: String!, $input: MagentoCartItemInput!) {
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
