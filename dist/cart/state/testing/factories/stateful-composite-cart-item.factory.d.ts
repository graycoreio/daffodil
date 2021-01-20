import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCompositeCartItem } from '@daffodil/cart/testing';
import { DaffCartItemStateEnum, DaffStatefulCompositeCartItem } from '@daffodil/cart/state';
export declare class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem implements DaffStatefulCompositeCartItem {
    daffState: DaffCartItemStateEnum.Default;
}
export declare class DaffStatefulCompositeCartItemFactory extends DaffModelFactory<DaffStatefulCompositeCartItem> {
    constructor();
}
