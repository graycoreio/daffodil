import gql from 'graphql-tag';

import { cartItemFragment } from './fragments/cart-item';
import { moneyFragment } from './fragments/money';

export const applyCoupon = gql`
  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {
    mutation {
      applyCouponToCart(
        input: {
					cart_id: $cartId,
					coupon_code: $couponCode
        }
      ) {
				id
				items {
					...cartItem
				}
				applied_coupons {
					code
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
				applied_coupons {
					code
				}
				items {
					...cartItem
				}
				prices {
					discounts {
						label
						amount {
							...money
						}
					}
					grand_total {
						...money
					}
				}
      }
    }
  }
  ${cartItemFragment}
  ${moneyFragment}
`;
