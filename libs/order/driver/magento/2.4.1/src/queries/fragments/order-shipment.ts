import { gql } from '@damienwebdev/apollo-angular';

import { orderShipmentItemFragment } from './order-shipment-item';
import { orderShipmentTrackingFragment } from './order-shipment-tracking';

export const orderShipmentFragment = gql`
  fragment orderShipment on OrderShipment {
    tracking {
      ...orderShipmentTracking
    }
    items {
      ...orderShipmentItem
    }
  }
  ${orderShipmentItemFragment}
  ${orderShipmentTrackingFragment}
`;
