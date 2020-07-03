import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateShippingAddress = gql`
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!,
    $email: String!
  ) {
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
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
