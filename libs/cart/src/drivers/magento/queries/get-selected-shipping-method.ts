import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { selectedShippingMethodFragment } from './fragments/public_api';

export const getSelectedShippingMethod = (extraCartFragments: DocumentNode[] = []) => gql`
  query GetSelectedShippingMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${selectedShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
