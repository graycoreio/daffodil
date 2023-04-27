import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const applyCoupon = (extraCartFragments: DocumentNode[] = []) => gql`
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
