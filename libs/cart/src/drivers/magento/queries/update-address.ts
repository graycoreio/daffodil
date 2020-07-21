import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

/**
 * Update the shipping and billing address of the cart.
 * At the time of writing, Magento 2 processes compound queries in the order they are defined.
 * We rely on this fact and only use the return of the last query.
 * This helps us keep query complexity down and save some server CPU cycles.
 * Driver behavior is not guaranteed if Magento no longer processes compound queries in the order they are defined.
 */
export const updateAddress = gql`
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {
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
        ...cart
      }
    }
  }
  ${cartFragment}
`;
