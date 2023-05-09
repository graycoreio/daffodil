import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const removeAllCoupons = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoRemoveAllCoupons($cartId: String!) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
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
