import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { selectedPaymentMethodFragment } from './fragments/public_api';

export const getSelectedPaymentMethod = (extraCartFragments: DocumentNode[] = []) => gql`
  query GetSelectedPaymentMethod($cartId: String!) {
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
