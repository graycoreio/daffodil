import { DaffAccountRegistration, DaffCustomerRegistration } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockAccountRegistration implements DaffAccountRegistration {
    customer: DaffCustomerRegistration;
    password: any;
    private fakeCustomer;
}
export declare class DaffAccountRegistrationFactory extends DaffModelFactory<DaffAccountRegistration> {
    constructor();
}
