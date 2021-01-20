import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCartShippingRate implements DaffCartShippingRate {
    id: any;
    carrier: string;
    carrier_title: string;
    method_code: any;
    method_title: string;
    method_description: string;
    price: any;
}
export declare class DaffCartShippingRateFactory extends DaffModelFactory<DaffCartShippingRate> {
    constructor();
}
