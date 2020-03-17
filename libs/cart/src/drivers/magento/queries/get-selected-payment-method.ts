import gql from 'graphql-tag';

import { selectedPaymentMethodFragment } from './fragments/public_api';

export const getSelectedPaymentMethod = gql`
  query GetSelectedPaymentMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      selected_payment_method {
        ...selectedPaymentMethod
      }
    }
  }
  ${selectedPaymentMethodFragment}
`;
