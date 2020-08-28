import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { availableShippingMethodFragment } from './fragments/public_api';

export const listShippingMethods = (extraCartFragments: DocumentNode[] = []) => gql`
  query ListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
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
