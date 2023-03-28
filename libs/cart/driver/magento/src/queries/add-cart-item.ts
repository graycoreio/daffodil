import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import {
  cartFragment,
  magentoCartUserError,
} from './fragments/public_api';

export const addCartItem = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoAddCartItem($cartId: String!, $input: CartItemInput!) {
    addProductsToCart(
      cartId: $cartId,
      cartItems: [$input]
    ) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
      user_errors {
        ...cartUserError
      }
    }
  }
  ${cartFragment}
  ${magentoCartUserError}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
