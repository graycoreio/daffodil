import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from '../fragments/public_api';
import { MagentoSetSelectedPaymentMethodResponse } from './response.type';
import { MagentoCartSetSelectedPaymentMethodQueryVariables } from './variables.type';

export const setSelectedPaymentMethod = (extraCartFragments: DocumentNode[] = []) => gql<MagentoSetSelectedPaymentMethodResponse, MagentoCartSetSelectedPaymentMethodQueryVariables>`
  mutation MagentoSetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {
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
