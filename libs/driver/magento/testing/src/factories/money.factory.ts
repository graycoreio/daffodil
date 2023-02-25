import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';

export class MockMagentoMoney implements MagentoMoney {
  __typename = 'Money';
  value = faker.datatype.number({ min: 1, max: 10000 });
  currency = faker.random.word();
};

@Injectable({
  providedIn: 'root',
})
export class MagentoMoneyFactory extends DaffModelFactory<MagentoMoney> {
  constructor() {
    super(MockMagentoMoney);
  }
}
