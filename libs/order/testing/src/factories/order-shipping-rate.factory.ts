import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShippingMethod } from '@daffodil/order';

export class MockOrderShippingMethod implements DaffOrderShippingMethod {
  rate_id = faker.string.uuid();
  address_id = faker.string.uuid();
  order_id = faker.string.uuid();
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  carrier = faker.lorem.word();
  carrier_title = faker.lorem.word();
  code = faker.lorem.word();
  method = faker.lorem.word();
  method_description = faker.lorem.word();
  price = faker.number.int({ min: 1, max: 1000 });
  error_message = faker.lorem.word();
  method_title = faker.lorem.word();
}

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShippingMethodFactory extends DaffModelFactory<DaffOrderShippingMethod>{
  constructor() {
    super(MockOrderShippingMethod);
  }
}
