import {gql} from 'apollo-angular';

import { orderItemFragment } from './order-item';

export const orderCreditItemFragment = gql`
  fragment orderCreditItem on CreditMemoItemInterface {
    __typename
    id
    quantity_refunded
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
