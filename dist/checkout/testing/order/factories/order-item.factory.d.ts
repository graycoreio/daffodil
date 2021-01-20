import { DaffOrderItem } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * @deprecated
 */
export declare class MockOrderItem implements DaffOrderItem {
    item_id: any;
    image: any;
    quote_id: any;
    created_at: Date;
    updated_at: Date;
    product_id: any;
    parent_item_id: any;
    sku: string;
    name: string;
    description: string;
    weight: any;
    qty: any;
    price: any;
    discount_percent: any;
    discount_amount: any;
    tax_percent: any;
    tax_amount: any;
    row_total: any;
    row_total_with_discount: any;
    row_weight: any;
    tax_before_discount: any;
}
/**
 * @deprecated
 */
export declare class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {
    constructor();
}
