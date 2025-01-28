import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCart } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCartShippingRateFactory } from './cart-shipping-rate.factory';
import { DaffCartTotalFactory } from './cart-total.factory';

export class MockCart implements DaffCart {
  id = faker.datatype.uuid();
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
    protected shippingInformationFactory: DaffCartShippingRateFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartFactory extends DaffModelFactory<DaffCart>{
  constructor(
    totalFactory: DaffCartTotalFactory,
    shippingInformationFactory: DaffCartShippingRateFactory,
  ) {
    super(MockCart, totalFactory, shippingInformationFactory);
  }
}
