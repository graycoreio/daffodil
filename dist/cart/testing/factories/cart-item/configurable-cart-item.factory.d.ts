import { DaffConfigurableCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
export declare class DaffMockConfigurableCartItem extends DaffMockCartItem implements DaffConfigurableCartItem {
    type: DaffCartItemInputType;
    attributes: {
        attribute_label: string;
        value_label: string;
    }[];
}
export declare class DaffConfigurableCartItemFactory extends DaffModelFactory<DaffConfigurableCartItem> {
    constructor();
}
