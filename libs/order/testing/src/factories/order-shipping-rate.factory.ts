import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShippingMethod } from '@daffodil/order';

export class MockOrderShippingMethod implements DaffOrderShippingMethod {
  rate_id = faker.datatype.uuid();
  address_id = faker.datatype.uuid();
  order_id = faker.datatype.uuid();
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  carrier = faker.random.word();
  carrier_title = faker.random.word();
  code = faker.random.word();
  method = faker.random.word();
  method_description = faker.random.word();
  price = faker.datatype.number({ min: 1, max: 1000 });
  error_message = faker.random.word();
  method_title = faker.random.word();
}

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShippingMethodFactory extends DaffModelFactory<DaffOrderShippingMethod>{
  constructor(){
    super(MockOrderShippingMethod);
  }
}
