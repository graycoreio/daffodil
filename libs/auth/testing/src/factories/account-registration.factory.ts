import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffAccountRegistration, DaffCustomerRegistration } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerRegistrationFactory } from './customer-registration.factory';

export class MockAccountRegistration implements DaffAccountRegistration<DaffCustomerRegistration> {
  customer = this.fakeCustomer();
  password = faker.random.alphaNumeric(16);

  private fakeCustomer(): DaffCustomerRegistration {
    const factory = new DaffCustomerRegistrationFactory();

    return factory.create()
  }
};

@Injectable({
  providedIn: 'root'
})
export class DaffAccountRegistrationFactory extends DaffModelFactory<DaffAccountRegistration<DaffCustomerRegistration>> {
  constructor() {
    super(MockAccountRegistration);
  }
}
