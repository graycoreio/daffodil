import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/cart-item';
import { pricesFragment } from './fragments/prices';

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
