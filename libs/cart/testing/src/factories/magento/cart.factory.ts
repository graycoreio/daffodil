import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCart, MagentoMoney } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from './money.factory';

export class MockMagentoCart implements MagentoCart {
  id = faker.random.number(1000);
  prices = {
    subtotal_excluding_tax: this.money(),
    grand_total: this.money(),
    subtotal_including_tax: this.money(),
    subtotal_with_discount_excluding_tax: this.money(),
  };
  applied_coupons = [];
  items = [];
  billing_address = null;
  shipping_addresses = [];
  available_payment_methods = [];
  selected_payment_method = null;
  email = faker.internet.email();

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create()
  }
};


@Injectable({
  providedIn: 'root'
})
export class MagentoCartFactory extends DaffModelFactory<MagentoCart> {
  constructor() {
    super(MockMagentoCart);
  }
}
