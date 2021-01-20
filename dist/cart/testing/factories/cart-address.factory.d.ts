import { DaffCartAddress } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCartAddress implements DaffCartAddress {
    address_id: any;
    address_type: string;
    email: string;
    prefix: string;
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    company: string;
    street: string;
    city: string;
    state: string;
    region: string;
    postcode: string;
    country_id: string;
    telephone: string;
}
export declare class DaffCartAddressFactory extends DaffModelFactory<DaffCartAddress> {
    constructor();
}
