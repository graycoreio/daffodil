import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockAuthToken implements DaffAuthToken {
  token = faker.random.number(1000000).toString();
};

@Injectable({
  providedIn: 'root'
})
export class DaffAuthTokenFactory extends DaffModelFactory<DaffAuthToken> {
  constructor() {
    super(MockAuthToken);
  }
}
