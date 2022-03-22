import { gql } from '@damienwebdev/apollo-angular';

import { cartAddressFragment } from './cart-address';
import { pricesFragment } from './prices';
import { selectedShippingMethodFragment } from './selected-shipping-method';

export const cartTotalsFragment = gql`
  fragment cartTotals on Cart {
    id
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${selectedShippingMethodFragment}
  ${pricesFragment}
`;
