import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const getCart = (extraCartFragments: DocumentNode[] = []) => gql`
  query MagentoGetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
