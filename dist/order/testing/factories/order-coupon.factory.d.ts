import { DaffOrderCoupon } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderCoupon implements DaffOrderCoupon {
    code: any;
}
export declare class DaffOrderCouponFactory extends DaffModelFactory<DaffOrderCoupon> {
    constructor();
}
