import gql from 'graphql-tag';

import { cartAddressFragment } from './fragments/public_api';

export const getShippingAddress = gql`
  query GetShippingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        ...cartAddress
      }
      email
    }
  }
  ${cartAddressFragment}
`;
