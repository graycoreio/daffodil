import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MockMagentoCart } from '@daffodil/cart/driver/magento/testing';
import { MagentoCartWithStoreCredit } from '@daffodil/cart-store-credit/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';

export class MockMagentoCartWithStoreCredit extends MockMagentoCart implements MagentoCartWithStoreCredit {
  applied_store_credit = {
    applied_balance: this.moneyFactory.create(),
    enabled: faker.datatype.boolean(),
  };

  constructor(
    protected moneyFactory: MagentoMoneyFactory,
  ) {
    super();
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartWithStoreCreditFactory extends DaffModelFactory<MagentoCartWithStoreCredit> {
  constructor(
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(MockMagentoCartWithStoreCredit, moneyFactory);
  }
}
