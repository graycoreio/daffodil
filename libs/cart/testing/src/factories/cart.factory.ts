import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartTotal,
} from '@daffodil/cart';
import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';

import { DaffCartShippingRateFactory } from './cart-shipping-rate.factory';
import { DaffCartTotalFactory } from './cart-total.factory';

export class MockCart implements DaffCart {
  id = faker.string.uuid();
  coupons = [];
  items = [];
  billing_address = null;
  shipping_address = null;
  shipping_information = this.shippingInformationFactory.create();
  totals = this.totalFactory.createMany(8).reduce<Record<string, DaffCartTotal>>((acc, total) => ({ ...acc, [total.name]: total }), {});
  payment = null;
  available_shipping_methods = [];
  available_payment_methods = [];
  extra_attributes = {};

  constructor(
    protected totalFactory: IDaffModelFactory<DaffCartTotal>,
    protected shippingInformationFactory: IDaffModelFactory<DaffCartShippingRate>,
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
