import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoDiscount,
  MagentoMoney,
} from '@daffodil/driver/magento';
import {
  MagentoDiscountFactory,
  MagentoMoneyFactory,
} from '@daffodil/driver/magento/testing';
import { MagentoOrderTotal } from '@daffodil/order/driver/magento/2.4.1';

export class MockOrderTotal implements MagentoOrderTotal {
  discounts = this.createDiscounts();
  grand_total = this.createMoney();
  subtotal = this.createMoney();
  total_shipping = this.createMoney();
  total_tax = this.createMoney();

  constructor(
    private moneyFactory: MagentoMoneyFactory,
    private discountFactory: MagentoDiscountFactory,
  ) {}

  private createMoney(): MagentoMoney {
    return this.moneyFactory.create();
  }

  private createDiscounts(): MagentoDiscount[] {
    return this.discountFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  }
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderTotalFactory extends DaffModelFactory<MagentoOrderTotal> {
  constructor(
    moneyFactory: MagentoMoneyFactory,
    discountFactory: MagentoDiscountFactory,
  ) {
    super(MockOrderTotal, moneyFactory, discountFactory);
  }
}
