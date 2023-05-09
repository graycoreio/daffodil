import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffOrderShippingRate } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @deprecated
 */
export class MockOrderShippingRate implements DaffOrderShippingRate {
  rate_id = faker.datatype.number({ min: 1, max: 1000 });
  address_id = faker.datatype.number({ min: 1, max: 1000 });
  created_at = new Date();
  updated_at = new Date();
  carrier = 'Birds Inc.';
  carrier_title = 'laden';
  code = 'code';
  method = 'swallow';
  method_description = 'efficient';
  price = faker.datatype.number({ min: 1, max: 1000 });
  error_message = 'error message';
  method_title = 'laden';
}

/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderShippingRateFactory extends DaffModelFactory<DaffOrderShippingRate>{
  constructor(){
    super(MockOrderShippingRate);
  }
}
