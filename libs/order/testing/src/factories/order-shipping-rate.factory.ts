import { Injectable } from '@angular/core';

import { DaffOrderShippingRate } from '@daffodil/order';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderShippingRate implements DaffOrderShippingRate {
  rate_id = faker.random.number(1000);
  address_id = faker.random.number(1000);
  created_at = new Date();
  updated_at = new Date();
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
export class DaffOrderShippingRateFactory extends DaffModelFactory<DaffOrderShippingRate>{
  constructor(){
    super(MockOrderShippingRate);
  }
}
