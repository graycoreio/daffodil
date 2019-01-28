import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { Cart } from '@daffodil/core';
import { ModelFactory } from '../../factories/factory';

export class MockCart implements Cart {
  id = faker.random.number(1000);
  created_at = new Date();
  updated_at = new Date();
  store_to_base_rate = faker.random.number(999);
  grand_total = faker.random.number(999);
  checkout_method = 'card';
  customer_id = faker.random.number(1000);
  coupon_code = faker.random.number(100000).toString();
  subtotal = faker.random.number(999);
  subtotal_with_discount = faker.random.number(999);
  items = [];
  addresses = [];
  payment = null;
};


@Injectable({
  providedIn: 'root'
})
export class DaffCartFactory extends ModelFactory<Cart>{
  constructor(){
    super(MockCart);
  }
}