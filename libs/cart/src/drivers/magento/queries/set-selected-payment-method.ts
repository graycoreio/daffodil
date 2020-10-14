import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const setSelectedPaymentMethod = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
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
