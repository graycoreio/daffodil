import { DaffProductImage } from '@daffodil/product';
/**
 * @deprecated
 */
export interface DaffOrderItem {
    item_id: number;
    image: DaffProductImage;
    quote_id: number;
    created_at: Date;
    updated_at: Date;
    product_id: number;
    parent_item_id: number;
    sku: string;
    name: string;
    description: string;
    weight: number;
    qty: number;
    price: number;
    discount_percent: number;
    discount_amount: number;
    tax_percent: number;
    tax_amount: number;
    row_total: number;
    row_total_with_discount: number;
    row_weight: number;
    tax_before_discount: number;
}
