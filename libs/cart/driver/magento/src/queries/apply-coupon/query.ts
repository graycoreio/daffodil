import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoApplyCouponResponse } from './response.type';
import { MagentoCartApplyCouponQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const applyCoupon = (extraCartFragments: DocumentNode[] = []) => gql<MagentoApplyCouponResponse, MagentoCartApplyCouponQueryVariables>`
  mutation MagentoApplyCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId,
        coupon_code: $couponCode
      }
    ) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
