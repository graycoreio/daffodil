import { MagentoCartPaymentMethod } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockMagentoCartPaymentMethod implements MagentoCartPaymentMethod {
    code: any;
    title: any;
    purchase_order_number: any;
}
export declare class MagentoCartPaymentMethodFactory extends DaffModelFactory<MagentoCartPaymentMethod> {
    constructor();
}
