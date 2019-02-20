import { Injectable } from "@angular/core";

import { OrderShippingRate } from "@daffodil/core";
import * as faker from 'faker/locale/en_US';
import { ModelFactory } from "../../factories/factory";

export class MockOrderShippingRate implements OrderShippingRate {
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
export class DaffOrderShippingRateFactory extends ModelFactory<OrderShippingRate>{
  constructor(){
    super(MockOrderShippingRate);
  }
}