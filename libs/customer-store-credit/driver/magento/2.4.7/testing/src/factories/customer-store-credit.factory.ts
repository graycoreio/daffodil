import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerStoreCredit } from '@daffodil/customer-store-credit/driver/magento/2.4.7';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/2.4.7/testing';

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
