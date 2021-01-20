import { DaffAddress } from '@daffodil/core';
import { DaffModelFactory } from '../../factories/factory';
/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
export declare class MockDaffAddress implements DaffAddress {
    firstname: any;
    lastname: any;
    street: any;
    city: any;
    state: any;
    email: any;
    postcode: any;
    telephone: any;
}
/**
 * @deprecated
 * Prefer the `DaffAddressFactory` of `daffodil/geography/testing`
 */
export declare class DaffAddressFactory extends DaffModelFactory<DaffAddress> {
    constructor();
}
