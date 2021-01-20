import { DaffOrderShippingRate } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * @deprecated
 */
export declare class MockOrderShippingRate implements DaffOrderShippingRate {
    rate_id: any;
    address_id: any;
    created_at: Date;
    updated_at: Date;
    carrier: string;
    carrier_title: string;
    code: string;
    method: string;
    method_description: string;
    price: any;
    error_message: string;
    method_title: string;
}
/**
 * @deprecated
 */
export declare class DaffOrderShippingRateFactory extends DaffModelFactory<DaffOrderShippingRate> {
    constructor();
}
