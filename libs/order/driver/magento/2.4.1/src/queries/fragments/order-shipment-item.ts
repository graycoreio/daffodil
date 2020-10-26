import gql from 'graphql-tag';

import { orderBundleItemFragment, orderItemFragment } from './order-item';

export const orderShipmentItemFragment = gql`
  fragment orderShipmentItem on ShipmentItem {
    quantity_shipped
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

export const orderShipmentBundleItemFragment = gql`
  fragment orderShipmentBundleItem on BundleShipmentItem {
    quantity_shipped
    order_item {
      ...orderBundleItem
    }
  }
  ${orderBundleItemFragment}
`;
