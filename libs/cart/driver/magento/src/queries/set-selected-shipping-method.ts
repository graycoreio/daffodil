import {gql} from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const setSelectedShippingMethod = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {
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
