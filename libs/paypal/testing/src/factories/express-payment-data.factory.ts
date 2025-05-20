import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalExpressPaymentData } from '@daffodil/paypal';

export class MockDaffPaypalExpressPaymentData implements DaffPaypalExpressPaymentData {
  token = faker.lorem.word();
  payerId = faker.string.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressPaymentDataFactory extends DaffModelFactory<DaffPaypalExpressPaymentData>{
  constructor() {
    super(MockDaffPaypalExpressPaymentData);
  }
}
