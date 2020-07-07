import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrder } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @deprecated
 */
export class MockOrder implements DaffOrder {
  id = faker.random.number({min: 1, max: 1000});
  created_at = new Date();
  updated_at = new Date();
  store_to_base_rate = faker.random.number({min: 1, max: 1000});
  grand_total = faker.random.number({min: 1, max: 1000});
  checkout_method = 'card';
  customer_id = faker.random.number({min: 1, max: 1000});
  coupon_code = faker.random.number({min: 1, max: 100000}).toString();
  subtotal = faker.random.number({min: 1, max: 1000});
  subtotal_with_discount = faker.random.number({min: 1, max: 1000});
  items = [];
  addresses = [];
  payment = null;
};


/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root'
})
export class DaffOrderFactory extends DaffModelFactory<DaffOrder>{
  constructor(){
    super(MockOrder);
  }
}
