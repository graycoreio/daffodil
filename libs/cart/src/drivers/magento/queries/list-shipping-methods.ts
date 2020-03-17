import gql from 'graphql-tag';

import { availableShippingMethodFragment } from './fragments/public_api';

export const listShippingMethods = gql`
  query ListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        available_shipping_methods {
          ...availableShippingMethod
        }
      }
    }
  }
  ${availableShippingMethodFragment}
`;
