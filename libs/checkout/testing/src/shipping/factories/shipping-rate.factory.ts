import { Injectable } from '@angular/core';

import { ShippingRate } from '@daffodil/checkout';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockShippingRate implements ShippingRate {
    rate_id = faker.random.number({min: 1, max: 1000});
    price = faker.random.number({min: 1, max: 1000});
    carrier = 'Birds Inc.';
    code = 'code';
    method = 'swallow';
    method_description = 'efficient';
    method_title = 'laden';
}

@Injectable({
    providedIn: 'root'
})
export class DaffShippingRateFactory extends DaffModelFactory<ShippingRate>{
    constructor(){
        super(MockShippingRate);
      }
}
