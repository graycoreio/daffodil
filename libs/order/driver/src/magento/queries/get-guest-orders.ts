import gql from 'graphql-tag';

import { orderFragment } from './fragments/public_api';

export const getGuestOrders = gql`
  query GetGuestOrders($cartId: String) {
    graycoreGuestOrders(cartId: $cartId) {
      orders {
        ...order
      }
    }
  }
  ${orderFragment}
`;
