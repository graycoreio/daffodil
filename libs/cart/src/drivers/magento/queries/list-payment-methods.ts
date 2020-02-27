import gql from 'graphql-tag';

import { cartPaymentMethodFragment } from './fragments';

export const listPaymentMethods = gql`
  query ListPaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        ...cartPaymentMethod
      }
    }
  }
  ${cartPaymentMethodFragment}
`;
