import { DaffOrderItem, DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderItem implements DaffOrderItem {
    item_id: any;
    image: {
        url: any;
        id: string;
        label: any;
    };
    order_id: any;
    qty_ordered: any;
    qty_canceled: any;
    qty_fulfilled: any;
    created_at: any;
    updated_at: any;
    product_id: any;
    parent_item_id: any;
    sku: any;
    name: any;
    weight: any;
    qty: any;
    price: any;
    discount_amount: any;
    discount_percent: number;
    tax_percent: any;
    tax_amount: any;
    row_total: number;
    row_total_with_discount: number;
    row_weight: any;
    tax_before_discount: any;
    type: DaffOrderItemType;
}
export declare class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {
    constructor();
}
