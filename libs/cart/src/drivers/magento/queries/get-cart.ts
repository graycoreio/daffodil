import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { cartFragment } from './fragments/public_api';

export const getCart = (extraCartFragments: DocumentNode[] = []) => gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
