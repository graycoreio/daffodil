import { Injectable } from '@angular/core';

import { DaffCustomerRegistration } from '@daffodil/auth';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCustomerRegistration implements DaffCustomerRegistration {
  email = faker.random.number(1000000).toString();
  firstName = faker.random.number(1000000).toString();
  lastName = faker.random.number(1000000).toString();
}

@Injectable({
  providedIn: 'root'
})
export class DaffCustomerRegistrationFactory extends DaffModelFactory<DaffCustomerRegistration> {
  constructor() {
    super(MockCustomerRegistration);
  }
}
