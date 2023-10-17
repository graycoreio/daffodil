import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoAddCartItemResponse } from './response.type';
import { MagentoCartAddItemQueryVariables } from './variables.type';
import {
  cartFragment,
  magentoCartUserError,
} from '../fragments/public_api';

export const addCartItem = (extraCartFragments: DocumentNode[] = []) => gql<MagentoAddCartItemResponse, MagentoCartAddItemQueryVariables>`
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
