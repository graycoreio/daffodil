import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const setGuestEmail = gql`
  mutation SetGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(
      cart_id: $cartId,
      email: $email
    ) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
`;
