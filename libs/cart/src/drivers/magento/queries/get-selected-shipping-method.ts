import gql from 'graphql-tag';

import { selectedShippingMethodFragment } from './fragments';

export const getSelectedShippingMethod = gql`
  query GetSelectedShippingMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
  }
  ${selectedShippingMethodFragment}
`;
