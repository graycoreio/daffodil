import { DaffCompositeCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
export declare class DaffMockCompositeCartItem extends DaffMockCartItem implements DaffCompositeCartItem {
    type: DaffCartItemInputType;
    options: {
        option_id: any;
        option_label: any;
        value_label: any;
    }[];
}
export declare class DaffCompositeCartItemFactory extends DaffModelFactory<DaffCompositeCartItem> {
    constructor();
}
