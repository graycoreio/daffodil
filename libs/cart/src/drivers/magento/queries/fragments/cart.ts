import gql from 'graphql-tag';

import { moneyFragment } from './money';
import { cartAddressFragment } from './cart-address';
import { availablePaymentMethodFragment } from './available-payment-method';
import { selectedPaymentMethodFragment } from './selected-payment-method';
import { cartItemFragment } from './cart-item';
import { cartCouponFragment } from './cart-coupon';
import { availableShippingMethodFragment } from './available-shipping-method';
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
        available_shipping_methods {
          ...availableShippingMethod
        }
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
      grand_total {
        ...money
      }
      subtotal_excluding_tax {
        ...money
      }
      subtotal_including_tax {
        ...money
      }
      subtotal_with_discount_excluding_tax {
        ...money
      }
    }
  }
  ${cartAddressFragment}
  ${availablePaymentMethodFragment}
  ${selectedPaymentMethodFragment}
  ${availableShippingMethodFragment}
  ${selectedShippingMethodFragment}
  ${cartItemFragment}
  ${moneyFragment}
  ${cartCouponFragment}
`;
