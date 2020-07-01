import gql from 'graphql-tag';

import { orderFragment } from './fragments/public_api';

export const getGuestOrders = gql`
  query GetGuestOrders {
    orders {
      ...order
    }
  }
  ${orderFragment}
`;
