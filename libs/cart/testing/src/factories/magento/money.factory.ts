import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoMoney } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoMoney implements MagentoMoney {
  value = faker.random.number(10000);
  currency = faker.random.word();
};


@Injectable({
  providedIn: 'root'
})
export class MagentoMoneyFactory extends DaffModelFactory<MagentoMoney> {
  constructor() {
    super(MockMagentoMoney);
  }
}
