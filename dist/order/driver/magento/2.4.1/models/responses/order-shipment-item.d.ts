import { MagentoOrderBundleItemSelectedOption, MagentoOrderItem } from './order-item';
export interface MagentoOrderShipmentItem {
    order_item: MagentoOrderItem;
    quantity_shipped: number;
}
export interface MagentoOrderShipmentBundleItem extends MagentoOrderShipmentItem {
    bundle_options: MagentoOrderBundleItemSelectedOption[];
}
