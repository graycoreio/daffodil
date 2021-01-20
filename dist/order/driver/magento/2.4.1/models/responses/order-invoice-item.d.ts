import { MagentoOrderBundleItemSelectedOption, MagentoOrderItem } from './order-item';
export interface MagentoOrderInvoiceItem {
    order_item: MagentoOrderItem;
    quantity_invoiced: number;
}
export interface MagentoOrderInvoiceBundleItem extends MagentoOrderInvoiceItem {
    bundle_options: MagentoOrderBundleItemSelectedOption[];
}
