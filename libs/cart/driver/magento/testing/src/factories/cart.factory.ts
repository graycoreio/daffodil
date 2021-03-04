import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCart } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';

export class MockMagentoCart implements MagentoCart {
	__typename = 'Cart';
  id = faker.random.uuid();
  prices = {
    __typename: 'CartPrices',
    subtotal_excluding_tax: this.money(),
    grand_total: this.money(),
    subtotal_including_tax: this.money(),
    subtotal_with_discount_excluding_tax: this.money(),
    applied_taxes: [{
      __typename: 'AppliedTax',
      amount: this.money(),
      label: 'tax',
    }],
    discounts: [{
      __typename: 'Discount',
      amount: this.money(),
      label: 'discount',
    }],
  };
  applied_coupons = [];
  items = [];
  billing_address = null;
  shipping_addresses = [];
  available_payment_methods = [];
  selected_payment_method = null;
  email = faker.internet.email();

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create();
  }
};


@Injectable({
  providedIn: 'root',
})
export class MagentoCartFactory extends DaffModelFactory<MagentoCart> {
  constructor() {
    super(MockMagentoCart);
  }
}
