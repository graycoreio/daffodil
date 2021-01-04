import {gql} from 'apollo-angular';

import { orderItemFragment } from './order-item';

export const orderShipmentItemFragment = gql`
  fragment orderShipmentItem on ShipmentItemInterface {
    quantity_shipped
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
