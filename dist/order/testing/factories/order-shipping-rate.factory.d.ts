import { DaffOrderShippingMethod } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderShippingMethod implements DaffOrderShippingMethod {
    rate_id: any;
    address_id: any;
    order_id: any;
    created_at: any;
    updated_at: any;
    carrier: any;
    carrier_title: any;
    code: any;
    method: any;
    method_description: any;
    price: any;
    error_message: any;
    method_title: any;
}
export declare class DaffOrderShippingMethodFactory extends DaffModelFactory<DaffOrderShippingMethod> {
    constructor();
}
