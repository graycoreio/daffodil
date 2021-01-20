import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockConfigurableCartItem } from '@daffodil/cart/testing';
import { DaffCartItemStateEnum, DaffStatefulConfigurableCartItem } from '@daffodil/cart/state';
export declare class DaffMockStatefulConfigurableCartItem extends DaffMockConfigurableCartItem implements DaffStatefulConfigurableCartItem {
    daffState: DaffCartItemStateEnum.Default;
}
export declare class DaffStatefulConfigurableCartItemFactory extends DaffModelFactory<DaffStatefulConfigurableCartItem> {
    constructor();
}
