import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderPayment } from '@daffodil/order';

export class MockOrderPayment implements DaffOrderPayment {
  id = faker.datatype.uuid();
  order_id = faker.datatype.uuid();
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  method = 'card';
  cc_type = 'visa';
  cc_last4 = faker.datatype.number({ min: 1000, max: 9999 }).toString();
  cc_owner = 'owner';
  cc_exp_month = 'month';
  cc_exp_year = 'year';
}

@Injectable({
  providedIn: 'root',
})
export class DaffOrderPaymentFactory extends DaffModelFactory<DaffOrderPayment>{
  constructor() {
    super(MockOrderPayment);
  }
}
