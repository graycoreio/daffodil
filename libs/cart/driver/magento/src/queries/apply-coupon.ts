import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';

export const applyCoupon = (extraCartFragments: DocumentNode[] = []) => gql`
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
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
  ${pricesFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
