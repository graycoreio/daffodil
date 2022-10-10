import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';

export class MockPaypalTokenResponse implements DaffPaypalExpressTokenResponse {
  token = faker.random.word();
  urls = {
    start: faker.internet.url(),
    edit: faker.internet.url(),
  };
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressTokenResponseFactory extends DaffModelFactory<DaffPaypalExpressTokenResponse>{
  constructor() {
    super(MockPaypalTokenResponse);
  }
}
