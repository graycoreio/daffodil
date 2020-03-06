import gql from 'graphql-tag';

import { cartItemFragment } from './fragments';

export const listCartItems = gql`
  query ListCartItems($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        ...cartItem
      }
    }
  }
  ${cartItemFragment}
`;
