import { DaffCartCoupon } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockDaffCartCoupon implements DaffCartCoupon {
    coupon_id: any;
    code: any;
    description: any;
}
export declare class DaffCartCouponFactory extends DaffModelFactory<DaffCartCoupon> {
    constructor();
}
