import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoDiscount,
  MagentoMoney,
} from '@daffodil/driver/magento';

import { MagentoMoneyFactory } from './money.factory';

export class MockMagentoDiscount implements MagentoDiscount {
  __typename = 'Discount';
  amount = this.money();
  label = faker.random.word();

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create();
  }
};

@Injectable({
  providedIn: 'root',
})
export class MagentoDiscountFactory extends DaffModelFactory<MagentoDiscount> {
  constructor() {
    super(MockMagentoDiscount);
  }
}
