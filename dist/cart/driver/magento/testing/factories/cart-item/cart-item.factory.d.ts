import { MagentoCartItem, MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MagentoProduct } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';
export declare class MockMagentoCartItem implements MagentoCartItem {
    __typename: MagentoCartItemTypeEnum;
    id: any;
    prices: {
        __typename: string;
        price: MagentoMoney;
        row_total: MagentoMoney;
        row_total_including_tax: MagentoMoney;
        total_item_discount: MagentoMoney;
    };
    product: MagentoProduct;
    quantity: any;
    private createProduct;
    private money;
}
export declare class MagentoCartItemFactory extends DaffModelFactory<MagentoCartItem> {
    constructor();
}
