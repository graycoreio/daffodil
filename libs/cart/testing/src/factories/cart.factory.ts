import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCart } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCart implements DaffCart {
  id = faker.random.number(1000);
  subtotal = faker.random.number(1000);
  grand_total = faker.random.number({min: this.subtotal, max: this.subtotal + 100});
  coupons = [];
  items = [];
  billing_address = null;
  shipping_address = null;
  shipping_information = null;
  totals = [];
  payment = null;
  available_shipping_methods = [];
  available_payment_methods = [];
};


@Injectable({
  providedIn: 'root'
})
export class DaffCartFactory extends DaffModelFactory<DaffCart>{
  constructor(){
    super(MockCart);
  }
}
