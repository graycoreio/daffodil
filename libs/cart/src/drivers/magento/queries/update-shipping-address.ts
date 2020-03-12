import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const updateShippingAddress = gql`
  mutation UpdateShippingAddress($cartId: String!, $address: ShippingAddressInput!) {
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
