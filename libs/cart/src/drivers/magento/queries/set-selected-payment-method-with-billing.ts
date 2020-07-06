import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const setSelectedPaymentMethodWithBilling = gql`
  mutation SetSelectedPaymentMethodWithBilling(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!
  ) {
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        ...cart
      }
    }
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
