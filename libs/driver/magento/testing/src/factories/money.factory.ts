import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';

export class MockMagentoMoney implements MagentoMoney {
  __typename = 'Money';
  value = faker.datatype.number({ min: 1, max: 10000 });
  currency = faker.finance.currencyCode();
};

@Injectable({
  providedIn: 'root',
})
export class MagentoMoneyFactory extends DaffModelFactory<MagentoMoney> {
  constructor() {
    super(MockMagentoMoney);
  }
}
