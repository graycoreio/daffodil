import { MagentoMoney } from '@daffodil/driver/magento';
import { MagentoDiscount } from './discount';
export declare enum MagentoOrderItemType {
    Simple = "simple",
    Configurable = "configurable",
    Bundle = "bundle"
}
export interface MagentoOrderItemOption {
    label: string;
    value: string;
}
export interface MagentoOrderItem {
    id: string;
    discounts: MagentoDiscount[];
    product_name: string;
    product_sale_price: MagentoMoney;
    product_sku: string;
    product_type: MagentoOrderItemType;
    product_url_key: string;
    quantity_canceled: number;
    quantity_invoiced: number;
    quantity_ordered: number;
    quantity_refunded: number;
    quantity_returned: number;
    quantity_shipped: number;
    selected_options: MagentoOrderItemOption[];
    entered_options: MagentoOrderItemOption[];
    status: string;
}
export interface MagentoOrderBundleItemSelectedOption {
    id: string;
    label: string;
    values: MagentoOrderBundleItemSelectedOptionValue[];
}
export interface MagentoOrderBundleItemSelectedOptionValue {
    id: string;
    price: MagentoMoney;
    product_name: string;
    product_sku: string;
    quantity: number;
}
export interface MagentoOrderBundleItem extends MagentoOrderItem {
    bundle_options: MagentoOrderBundleItemSelectedOption[];
}
