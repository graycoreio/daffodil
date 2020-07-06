import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateBillingAddressWithEmail = gql`
  mutation UpdateBillingAddress(
    $cartId: String!,
    $address: BillingAddressInput!,
    $email: String!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
`;
