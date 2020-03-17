import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const getCart = gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`;
