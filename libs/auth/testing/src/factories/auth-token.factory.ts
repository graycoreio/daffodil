import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockAuthToken implements DaffAuthToken {
  token = faker.random.alphaNumeric(16);
};

@Injectable({
  providedIn: 'root',
})
export class DaffAuthTokenFactory extends DaffModelFactory<DaffAuthToken> {
  constructor() {
    super(MockAuthToken);
  }
}
