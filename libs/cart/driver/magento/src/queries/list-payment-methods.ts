import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { availablePaymentMethodFragment } from './fragments/public_api';

export const listPaymentMethods = (extraCartFragments: DocumentNode[] = []) => gql`
  query MagentoListPaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        ...availablePaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availablePaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
