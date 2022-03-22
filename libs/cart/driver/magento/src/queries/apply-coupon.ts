import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { cartTotalsFragment } from './fragments/cart-totals';
import { cartCouponFragment } from './fragments/public_api';

export const applyCoupon = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoApplyCoupon($cartId: String!, $couponCode: String!) {
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
          ...cartCoupon
				}
				...cartTotals
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
	${cartCouponFragment}
	${cartTotalsFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
