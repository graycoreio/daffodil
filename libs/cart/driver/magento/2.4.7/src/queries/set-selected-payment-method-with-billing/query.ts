import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoSetSelectedPaymentMethodWithBillingResponse } from './response.type';
import { MagentoCartSetSelectedPaymentMethodWithBillingQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const setSelectedPaymentMethodWithBilling = (extraCartFragments: DocumentNode[] = []) => gql<MagentoSetSelectedPaymentMethodWithBillingResponse, MagentoCartSetSelectedPaymentMethodWithBillingQueryVariables>`
  mutation MagentoSetSelectedPaymentMethodWithBilling(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        id
      }
    }
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
