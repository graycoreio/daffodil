import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerStoreCredit } from '@daffodil/customer-store-credit/driver/magento';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';

export class MockMagentoCustomerStoreCredit implements MagentoCustomerStoreCredit {
  __typename = <const>'CustomerStoreCredit';
  current_balance = this.moneyFactory.create();
  enabled = faker.datatype.boolean();

  constructor(
    protected moneyFactory: MagentoMoneyFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerStoreCreditFactory extends DaffModelFactory<MagentoCustomerStoreCredit> {
  constructor(
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(MockMagentoCustomerStoreCredit, moneyFactory);
  }
}
