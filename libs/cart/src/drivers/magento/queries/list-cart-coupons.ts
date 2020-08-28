import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { cartCouponFragment } from './fragments/public_api';

export const listCartCoupons = (extraCartFragments: DocumentNode[] = []) => gql`
  query listCartCoupons($cartId: String!) {
    cart(cart_id: $cartId) {
      applied_coupons {
				...cartCoupon
			}
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartCouponFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
