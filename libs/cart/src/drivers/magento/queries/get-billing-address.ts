import gql from 'graphql-tag';

import { cartAddressFragment } from './fragments';

export const getBillingAddress = gql`
  query GetBillingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      billing_address {
        ...cartAddress
      }
      email
    }
  }
  ${cartAddressFragment}
`;
