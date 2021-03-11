import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCartShippingRate implements DaffCartShippingRate {
  id = faker.random.uuid();
  carrier = 'Birds Inc.';
  carrier_title = 'laden';
  method_code = faker.random.word();
  method_title = 'swallow';
  method_description = 'efficient';
  price = faker.random.number({ min: 1, max: 1500 });
}

@Injectable({
  providedIn: 'root',
})
export class DaffCartShippingRateFactory extends DaffModelFactory<DaffCartShippingRate>{
  constructor(){
    super(MockCartShippingRate);
  }
}
