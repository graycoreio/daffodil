import gql from 'graphql-tag';

import { cartShippingMethodFragment } from './fragments';

export const listShippingMethods = gql`
  query ListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        available_shipping_methods {
          ...cartShippingMethod
        }
      }
    }
  }
  ${cartShippingMethodFragment}
`;
