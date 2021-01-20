import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffAddress } from '@daffodil/geography';
export declare class MockDaffAddress implements DaffAddress {
    street: any;
    street2: any;
    city: any;
    region: any;
    postcode: any;
    country: any;
}
export declare class DaffAddressFactory extends DaffModelFactory<DaffAddress> {
    constructor();
}
