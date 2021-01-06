import {gql} from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

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
