import { MagentoOrderItem } from './order-item';
export interface MagentoOrderCreditItem {
    order_item: MagentoOrderItem;
    quantity_refunded: number;
}
