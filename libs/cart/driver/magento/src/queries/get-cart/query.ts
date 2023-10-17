import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoGetCartResponse } from './response.type';
import { MagentoCartGetQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const getCart = (extraCartFragments: DocumentNode[] = []) => gql<MagentoGetCartResponse, MagentoCartGetQueryVariables>`
  query MagentoGetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
