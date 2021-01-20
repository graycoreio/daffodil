import { MagentoCartCoupon } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockMagentoCartCoupon implements MagentoCartCoupon {
    code: any;
}
export declare class MagentoCartCouponFactory extends DaffModelFactory<MagentoCartCoupon> {
    constructor();
}
