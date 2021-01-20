import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPersonalAddress } from '@daffodil/geography';
import { MockDaffAddress } from './address.factory';
export declare class MockDaffPersonalAddress extends MockDaffAddress implements DaffPersonalAddress {
    prefix: any;
    suffix: any;
    firstname: any;
    middlename: any;
    lastname: any;
    email: any;
    telephone: any;
}
export declare class DaffPersonalAddressFactory extends DaffModelFactory<DaffPersonalAddress> {
    constructor();
}
