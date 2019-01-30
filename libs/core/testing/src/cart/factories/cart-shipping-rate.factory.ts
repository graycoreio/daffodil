import { Injectable } from "@angular/core";

import { CartShippingRate } from "@daffodil/core";
import * as faker from 'faker/locale/en_US';
import { ModelFactory } from "../../factories/factory";

export class MockCartShippingRate implements CartShippingRate {
    rate_id = faker.random.number(1000);
    address_id = faker.random.number(1000);
    created_at = new Date();
    updated_at = new Date();
    carrier = 'Birds Inc.';
    carrier_title = 'laden';
    code = 'code';
    method = 'swallow';
    method_description = 'efficient';
    price = faker.random.number(1500);
    error_message = 'error message';
    method_title = 'laden';
}

@Injectable({
    providedIn: 'root'
})
export class DaffCartShippingRateFactory extends ModelFactory<CartShippingRate>{
    constructor(){
        super(MockCartShippingRate);
      }
}