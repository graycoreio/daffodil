import gql from 'graphql-tag';

import { orderFragment } from './fragments/public_api';

export const getGuestOrders = gql`
  query GetGuestOrders($cartId: String) {
    graycoreGuestOrders(cart_id: $cartId) {
      orders {
        ...order
      }
    }
  }
  ${orderFragment}
`;
