import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateAddress = gql`
  mutation UpdateAddress($cartId: String!, $address: AddressInput!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
      }
    }
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
