import {gql} from 'apollo-angular';

import { orderItemFragment } from './order-item';

export const orderCreditItemFragment = gql`
  fragment orderCreditItem on CreditMemoItemInterface {
    quantity_refunded
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
