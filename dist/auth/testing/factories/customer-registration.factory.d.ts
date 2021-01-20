import { DaffCustomerRegistration } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCustomerRegistration implements DaffCustomerRegistration {
    email: any;
    firstName: any;
    lastName: any;
}
export declare class DaffCustomerRegistrationFactory extends DaffModelFactory<DaffCustomerRegistration> {
    constructor();
}
