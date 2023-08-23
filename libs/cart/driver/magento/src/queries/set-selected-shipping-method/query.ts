import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from '../fragments/public_api';
import { MagentoSetSelectedShippingMethodResponse } from './response.type';
import { MagentoCartSetSelectedShippingMethodQueryVariables } from './variables.type';

export const setSelectedShippingMethod = (extraCartFragments: DocumentNode[] = []) => gql<MagentoSetSelectedShippingMethodResponse, MagentoCartSetSelectedShippingMethodQueryVariables>`
  mutation MagentoSetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {
    setShippingMethodsOnCart(input: {
      cart_id: $cartId
      shipping_methods: [$method]
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
