import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCustomerRegistration } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCustomerRegistration implements DaffCustomerRegistration {
  email = faker.internet.email();
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
}

@Injectable({
  providedIn: 'root',
})
export class DaffCustomerRegistrationFactory extends DaffModelFactory<DaffCustomerRegistration> {
  constructor() {
    super(MockCustomerRegistration);
  }
}
