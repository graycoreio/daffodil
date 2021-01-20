import { ShippingRate } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockShippingRate implements ShippingRate {
    rate_id: any;
    price: any;
    carrier: string;
    code: string;
    method: string;
    method_description: string;
    method_title: string;
}
export declare class DaffShippingRateFactory extends DaffModelFactory<ShippingRate> {
    constructor();
}
