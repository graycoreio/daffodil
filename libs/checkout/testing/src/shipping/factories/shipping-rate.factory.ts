import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { ShippingRate } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockShippingRate implements ShippingRate {
    rate_id = faker.datatype.number({ min: 1, max: 1000 });
    price = faker.datatype.number({ min: 1, max: 1000 });
    carrier = 'Birds Inc.';
    code = 'code';
    method = 'swallow';
    method_description = 'efficient';
    method_title = 'laden';
}

@Injectable({
  providedIn: 'root',
})
export class DaffShippingRateFactory extends DaffModelFactory<ShippingRate>{
  constructor(){
    super(MockShippingRate);
  }
}
