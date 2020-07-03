import { Injectable } from '@angular/core';

import { DaffOrderPayment } from '@daffodil/order';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderPayment implements DaffOrderPayment {
    payment_id = faker.random.number({min: 1, max: 1000});
    order_id = faker.random.number({min: 1, max: 1000});
    created_at = faker.date.past().toString();
    updated_at = faker.date.past().toString();
    method = 'card';
    cc_type = 'visa';
    cc_last4 = faker.random.number({min: 1, max: 1000}).toString();
    cc_owner = 'owner';
    cc_exp_month = 'month';
    cc_exp_year = 'year';
}

@Injectable({
    providedIn: 'root'
})
export class DaffOrderPaymentFactory extends DaffModelFactory<DaffOrderPayment>{
    constructor(){
        super(MockOrderPayment);
      }
}
