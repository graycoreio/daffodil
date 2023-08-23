import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { availableShippingMethodFragment } from '../fragments/public_api';
import {
  MagentoCartListShippingMethodsQueryVariables,
  MagentoListShippingMethodsResponse,
} from '../public_api';

export const listShippingMethods = (extraCartFragments: DocumentNode[] = []) => gql<MagentoListShippingMethodsResponse, MagentoCartListShippingMethodsQueryVariables>`
  query MagentoListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      shipping_addresses {
        available_shipping_methods {
          ...availableShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availableShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
