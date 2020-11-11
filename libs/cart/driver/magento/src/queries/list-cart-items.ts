import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartItemFragment } from './fragments/public_api';

export const listCartItems = (extraCartFragments: DocumentNode[] = []) => gql`
  query ListCartItems($cartId: String!) {
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
