import { MagentoMoney } from '@daffodil/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCartShippingMethod } from '@daffodil/cart/driver/magento';
export declare class MockCartShippingMethod implements MagentoCartShippingMethod {
    carrier_code: any;
    carrier_title: any;
    method_title: any;
    method_code: any;
    amount: MagentoMoney;
    private money;
}
export declare class MagentoCartShippingMethodFactory extends DaffModelFactory<MagentoCartShippingMethod> {
    constructor();
}
