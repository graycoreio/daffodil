import gql from 'graphql-tag';

import { cartPaymentMethodFragment } from './fragments';

export const getSelectedPaymentMethod = gql`
  query GetSelectedPaymentMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      selected_payment_method {
        ...cartPaymentMethod
      }
    }
  }
  ${cartPaymentMethodFragment}
`;
