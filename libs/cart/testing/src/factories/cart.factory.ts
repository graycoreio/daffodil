import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { Cart } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCart implements Cart {
  id = faker.random.number(1000);
  created_at = new Date();
  updated_at = new Date();
  store_to_base_rate = faker.random.number(1500);
  grand_total = faker.random.number(1500);
  checkout_method = 'card';
  customer_id = faker.random.number(1000);
  coupon_code = faker.random.number(100000).toString();
  subtotal = faker.random.number(1500);
  subtotal_with_discount = faker.random.number(1500);
  items = [];
  addresses = [];
  payment = null;
};


@Injectable({
  providedIn: 'root'
})
export class DaffCartFactory extends DaffModelFactory<Cart>{
  constructor(){
    super(MockCart);
  }
}