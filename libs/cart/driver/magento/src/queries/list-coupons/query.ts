import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoListCartCouponsResponse } from './response.type';
import { MagentoCartListCouponsQueryVariables } from './variables.type';
import { cartCouponFragment } from '../fragments/public_api';

export const listCartCoupons = (extraCartFragments: DocumentNode[] = []) => gql<MagentoListCartCouponsResponse, MagentoCartListCouponsQueryVariables>`
  query MagentoListCartCoupons($cartId: String!) {
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
