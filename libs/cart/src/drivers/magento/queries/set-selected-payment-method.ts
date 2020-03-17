import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const setSelectedPaymentMethod = gql`
  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
