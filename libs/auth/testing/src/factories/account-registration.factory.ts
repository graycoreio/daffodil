import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffAccountRegistration } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockAccountRegistration implements DaffAccountRegistration {
  email = faker.internet.email();
  password = faker.random.alphaNumeric(16);
};

@Injectable({
  providedIn: 'root',
})
export class DaffAccountRegistrationFactory extends DaffModelFactory<DaffAccountRegistration> {
  constructor() {
    super(MockAccountRegistration);
  }
}
