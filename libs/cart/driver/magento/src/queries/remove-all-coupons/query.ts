import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

import { cartFragment } from '../fragments/public_api';
import { MagentoRemoveAllCouponsResponse } from './response.type';
import { MagentoCartRemoveAllCouponsQueryVariables } from './variables.type';

export const removeAllCoupons = (extraCartFragments: DocumentNode[] = []) => gql<MagentoRemoveAllCouponsResponse, MagentoCartRemoveAllCouponsQueryVariables>`
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
