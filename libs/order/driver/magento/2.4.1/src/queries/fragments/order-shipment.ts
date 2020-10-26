import gql from 'graphql-tag';

import { orderShipmentBundleItemFragment, orderShipmentItemFragment } from './order-shipment-item';
import { orderShipmentTrackingFragment } from './order-shipment-tracking';

export const orderShipmentFragment = gql`
  fragment orderShipment on OrderShipment {
    tracking {
      ...orderShipmentTracking
    }
    items {
      ...orderShipmentItem
      ...orderShipmentBundleItem
    }
  }
  ${orderShipmentItemFragment}
  ${orderShipmentBundleItemFragment}
  ${orderShipmentTrackingFragment}
`;
