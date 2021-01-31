import { gql } from 'apollo-angular';

import { availablePaymentMethodFragment } from './available-payment-method';
import { cartAddressFragment } from './cart-address';
import { cartCouponFragment } from './cart-coupon';
import { cartItemFragment } from './cart-item';
import { pricesFragment } from './prices';
import { selectedPaymentMethodFragment } from './selected-payment-method';
import { selectedShippingMethodFragment } from './selected-shipping-method';

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
