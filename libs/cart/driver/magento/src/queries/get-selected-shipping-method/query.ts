import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { selectedShippingMethodFragment } from '../fragments/public_api';
import { MagentoGetSelectedShippingMethodResponse } from './response.type';
import { MagentoCartGetSelectedShippingMethodQueryVariables } from './variables.type';

export const getSelectedShippingMethod = (extraCartFragments: DocumentNode[] = []) => gql<MagentoGetSelectedShippingMethodResponse, MagentoCartGetSelectedShippingMethodQueryVariables>`
  query MagentoGetSelectedShippingMethod($cartId: String!) {
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
