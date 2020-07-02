import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderShippingMethod } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderShippingMethod implements DaffOrderShippingMethod {
  rate_id = faker.random.number(1000);
  address_id = faker.random.number(1000);
  order_id = faker.random.number(1000);
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  carrier = 'Birds Inc.';
  carrier_title = 'laden';
  code = 'code';
  method = 'swallow';
  method_description = 'efficient';
  price = faker.random.number(1000);
  error_message = 'error message';
  method_title = 'laden';
}

@Injectable({
    providedIn: 'root'
})
export class DaffOrderShippingMethodFactory extends DaffModelFactory<DaffOrderShippingMethod>{
  constructor(){
    super(MockOrderShippingMethod);
  }
}
