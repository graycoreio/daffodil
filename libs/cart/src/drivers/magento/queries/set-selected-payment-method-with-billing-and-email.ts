import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const setSelectedPaymentMethodWithBillingAndEmail = gql`
  mutation SetSelectedPaymentMethodWithBillingAndEmail(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!,
    $email: String!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
      }
    }
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        ...cart
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
`;
