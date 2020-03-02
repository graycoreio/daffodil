import gql from 'graphql-tag';

import { moneyFragment } from './money';
import { cartAddressFragment } from './cart-address';
import { cartPaymentMethodFragment } from './cart-payment-method';
import { cartItemFragment } from './cart-item';
import { cartCouponFragment } from './cart-coupon';

export const cartFragment = gql`
  fragment cart on MagentoCart {
    id
    email
    billing_address {
      ...cartAddress
    }
    shipping_addresses {
      ...cartAddress
      available_shipping_methods
      selected_shipping_method
    }
    items {
      ...cartItem
    }
    available_payment_methods {
      ...cartPaymentMethod
    }
    selected_payment_method {
      ...cartPaymentMethod
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
  ${cartPaymentMethodFragment}
  ${cartItemFragment}
  ${moneyFragment}
  ${cartCouponFragment}
`;
