import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartTotal,
  DaffCartTotalTypeEnum,
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
  totals = [
    DaffCartTotalTypeEnum.grandTotal,
    DaffCartTotalTypeEnum.subtotalExcludingTax,
    DaffCartTotalTypeEnum.subtotalIncludingTax,
    DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
    DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
    DaffCartTotalTypeEnum.tax,
    DaffCartTotalTypeEnum.discount,
    DaffCartTotalTypeEnum.shipping,
  ].reduce<Record<string, DaffCartTotal>>((acc, name) => ({ ...acc, [name]: this.totalFactory.create({ name }) }), {});
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
