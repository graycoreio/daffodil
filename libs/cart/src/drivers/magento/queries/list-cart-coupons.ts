import gql from 'graphql-tag';

import { cartCouponFragment } from './fragments/public_api';

export const listCartCoupons = gql`
  query listCartCoupons($cartId: String!) {
    cart(cart_id: $cartId) {
      applied_coupons {
				...cartCoupon
			}
    }
  }
  ${cartCouponFragment}
`;
