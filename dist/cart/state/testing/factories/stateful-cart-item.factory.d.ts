import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import { DaffStatefulCartItem, DaffCartItemStateEnum } from '@daffodil/cart/state';
export declare class DaffMockStatefulCartItem extends DaffMockCartItem implements DaffStatefulCartItem {
    daffState: DaffCartItemStateEnum;
}
export declare class DaffStatefulCartItemFactory extends DaffModelFactory<DaffStatefulCartItem> {
    constructor();
}
