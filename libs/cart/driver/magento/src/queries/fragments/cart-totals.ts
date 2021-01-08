import {gql} from 'apollo-angular';

import { cartAddressFragment } from './cart-address';
import { selectedShippingMethodFragment } from './selected-shipping-method';
import { pricesFragment } from './prices';

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
