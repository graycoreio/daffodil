import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const updateBillingAddress = gql`
  mutation UpdateBillingAddress($cartId: String!, $address: BillingAddressInput!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
