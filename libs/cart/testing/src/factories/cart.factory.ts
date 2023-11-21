import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCart } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCartTotalFactory } from './cart-total.factory';

export class MockCart implements DaffCart {
  id = faker.datatype.uuid();
  subtotal = 10000;
  grand_total = 15000;
  coupons = [];
  items = [];
  billing_address = null;
  shipping_address = null;
  shipping_information = null;
  totals = this.totalFactory.createAllTotals();
  payment = null;
  available_shipping_methods = [];
  available_payment_methods = [];
  extra_attributes = {};

  constructor(
    private totalFactory: DaffCartTotalFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartFactory extends DaffModelFactory<DaffCart>{
  constructor(
    totalFactory: DaffCartTotalFactory,
  ) {
    super(MockCart, totalFactory);
  }
}
