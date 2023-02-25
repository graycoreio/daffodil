import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalExpressTokenRequest } from '@daffodil/paypal';

export class MockDaffPaypalExpressTokenRequest implements DaffPaypalExpressTokenRequest {
  button = true;
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressTokenRequestFactory extends DaffModelFactory<DaffPaypalExpressTokenRequest>{
  constructor() {
    super(MockDaffPaypalExpressTokenRequest);
  }
}
