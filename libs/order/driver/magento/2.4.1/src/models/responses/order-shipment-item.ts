import { MagentoOrderBundleItemSelectedOption, MagentoOrderItem } from './order-item';

export type MagentoOrderShipmentItemTypenames =
  'ShipmentItem' |
  'BundleShipmentItem' |
  'GiftCardShipmentItem';

export interface MagentoOrderShipmentItem {
  __typename?: MagentoOrderShipmentItemTypenames;
  order_item: MagentoOrderItem;
  quantity_shipped: number;
};

export interface MagentoOrderShipmentBundleItem extends MagentoOrderShipmentItem {
  bundle_options: MagentoOrderBundleItemSelectedOption[];
};
