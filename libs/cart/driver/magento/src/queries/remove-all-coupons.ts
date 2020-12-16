import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { cartCouponFragment } from './fragments/public_api';
import { cartTotalsFragment } from './fragments/cart-totals';

export const removeAllCoupons = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation RemoveAllCoupons($cartId: String!) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
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
