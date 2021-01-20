import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum, MagentoConfigurableCartItem } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
export declare class MockMagentoConfigurableCartItem extends MockMagentoCartItem implements MagentoConfigurableCartItem {
    __typename: MagentoCartItemTypeEnum;
    configurable_options: {
        option_label: string;
        value_label: string;
    }[];
}
export declare class MagentoConfigurableCartItemFactory extends DaffModelFactory<MagentoConfigurableCartItem> {
    constructor();
}
