import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoGetSelectedPaymentMethodResponse } from './response.type';
import { MagentoCartGetSelectedPaymentMethodQueryVariables } from './variables.type';
import { selectedPaymentMethodFragment } from '../fragments/public_api';

export const getSelectedPaymentMethod = (extraCartFragments: DocumentNode[] = []) => gql<MagentoGetSelectedPaymentMethodResponse, MagentoCartGetSelectedPaymentMethodQueryVariables>`
  query MagentoGetSelectedPaymentMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      selected_payment_method {
        ...selectedPaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${selectedPaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
