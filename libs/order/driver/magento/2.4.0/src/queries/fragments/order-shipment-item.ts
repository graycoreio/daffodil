import { gql } from '@damienwebdev/apollo-angular';

import { orderItemFragment } from './order-item';

export const orderShipmentItemFragment = gql`
  fragment orderShipmentItem on GraycoreOrderShipmentItem {
    qty
    item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
