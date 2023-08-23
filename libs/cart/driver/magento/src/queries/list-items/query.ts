import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartItemFragment } from '../fragments/public_api';
import { MagentoListCartItemsResponse } from './response.type';
import { MagentoCartListItemsQueryVariables } from './variables.type';

export const listCartItems = (extraCartFragments: DocumentNode[] = []) => gql<MagentoListCartItemsResponse, MagentoCartListItemsQueryVariables>`
  query MagentoListCartItems($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        ...cartItem
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartItemFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
