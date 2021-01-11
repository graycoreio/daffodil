import {gql} from 'apollo-angular';

import { orderShipmentItemFragment } from './order-shipment-item';
import { orderShipmentTrackingFragment } from './order-shipment-tracking';

export const orderShipmentFragment = gql`
  fragment orderShipment on OrderShipment {
    __typename
    id
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
