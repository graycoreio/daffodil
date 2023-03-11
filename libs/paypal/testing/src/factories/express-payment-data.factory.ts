import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalExpressPaymentData } from '@daffodil/paypal';

export class MockDaffPaypalExpressPaymentData implements DaffPaypalExpressPaymentData {
  token = faker.random.word();
  payerId = faker.datatype.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressPaymentDataFactory extends DaffModelFactory<DaffPaypalExpressPaymentData>{
  constructor() {
    super(MockDaffPaypalExpressPaymentData);
  }
}
