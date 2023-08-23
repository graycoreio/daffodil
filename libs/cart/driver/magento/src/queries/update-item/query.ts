import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from '../fragments/public_api';
import { MagentoUpdateCartItemResponse } from './response.type';
import { MagentoCartUpdateItemQueryVariables } from './variables.type';

export const updateCartItem = (extraCartFragments: DocumentNode[] = []) => gql<MagentoUpdateCartItemResponse, MagentoCartUpdateItemQueryVariables>`
  mutation MagentoUpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {
    updateCartItems(input: {
      cart_id: $cartId
      cart_items: [$input]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
