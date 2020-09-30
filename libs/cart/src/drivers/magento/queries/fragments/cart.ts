import gql from 'graphql-tag';

import { cartAddressFragment } from './cart-address';
import { availablePaymentMethodFragment } from './available-payment-method';
import { selectedPaymentMethodFragment } from './selected-payment-method';
import { cartItemFragment } from './cart-item';
import { cartCouponFragment } from './cart-coupon';
import { selectedShippingMethodFragment } from './selected-shipping-method';
import { pricesFragment } from './prices';

export const cartFragment = gql`
  fragment cart on Cart {
    id
    email
    billing_address {
      ...cartAddress
    }
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    items {
      ...cartItem
    }
    available_payment_methods {
      ...availablePaymentMethod
    }
    selected_payment_method {
      ...selectedPaymentMethod
    }
    applied_coupons {
      ...cartCoupon
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${availablePaymentMethodFragment}
  ${selectedPaymentMethodFragment}
  ${selectedShippingMethodFragment}
  ${cartItemFragment}
  ${pricesFragment}
  ${cartCouponFragment}
`;
