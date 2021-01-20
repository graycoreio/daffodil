import { DaffCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImage } from '@daffodil/product';
export declare class DaffMockCartItem implements DaffCartItem {
    item_id: any;
    type: DaffCartItemInputType;
    product_id: string;
    parent_item_id: any;
    image: DaffProductImage;
    sku: string;
    name: string;
    qty: any;
    price: any;
    row_total: number;
    total_discount: any;
    in_stock: boolean;
}
export declare class DaffCartItemFactory extends DaffModelFactory<DaffCartItem> {
    constructor();
}
