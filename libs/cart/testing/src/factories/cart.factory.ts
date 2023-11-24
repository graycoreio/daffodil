import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCart } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCartShippingInformationFactory } from './cart-shipping-information.factory';
import { DaffCartTotalFactory } from './cart-total.factory';

export class MockCart implements DaffCart {
  id = faker.datatype.uuid();
  subtotal = 10000;
  grand_total = 15000;
  coupons = [];
  items = [];
  billing_address = null;
  shipping_address = null;
  shipping_information = this.shippingInformationFactory.create();
  totals = this.totalFactory.createAllTotals();
  payment = null;
  available_shipping_methods = [];
  available_payment_methods = [];
  extra_attributes = {};

  constructor(
    protected totalFactory: DaffCartTotalFactory,
    protected shippingInformationFactory: DaffCartShippingInformationFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartFactory extends DaffModelFactory<DaffCart>{
  constructor(
    totalFactory: DaffCartTotalFactory,
    shippingInformationFactory: DaffCartShippingInformationFactory,
  ) {
    super(MockCart, totalFactory, shippingInformationFactory);
  }
}
