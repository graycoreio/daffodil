import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum, MagentoBundleCartItem } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
export declare class MockMagentoBundleCartItem extends MockMagentoCartItem implements MagentoBundleCartItem {
    __typename: MagentoCartItemTypeEnum;
    bundle_options: {
        id: any;
        type: string;
        label: any;
        price: any;
        quantity: number;
        values: {
            id: any;
            label: any;
            price: any;
            quantity: number;
        }[];
    }[];
}
export declare class MagentoBundleCartItemFactory extends DaffModelFactory<MagentoBundleCartItem> {
    constructor();
}
