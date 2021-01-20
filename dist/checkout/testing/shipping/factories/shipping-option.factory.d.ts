import { ShippingOption } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockShippingOption implements ShippingOption {
    id: any;
    text: string;
}
export declare class DaffShippingOptionFactory extends DaffModelFactory<ShippingOption> {
    constructor();
}
