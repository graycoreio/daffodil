import gql from 'graphql-tag';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';

export const applyCoupon = gql`
  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId,
        coupon_code: $couponCode
      }
    ) {
      cart {
        id
        items {
          ...cartItem
        }
        applied_coupons {
          code
        }
        prices {
          ...prices
        }
      }
    }
  }
  ${cartItemFragment}
  ${pricesFragment}
`;
