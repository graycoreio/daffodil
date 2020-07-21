import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateAddressWithEmail = gql`
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!, $email: String!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: {
        address: $address
      }
    }) {
      cart {
        id
      }
    }
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [{
        address: $address
      }]
    }) {
      cart {
        id
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
