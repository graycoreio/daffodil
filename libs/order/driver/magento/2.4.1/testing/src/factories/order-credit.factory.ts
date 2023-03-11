import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderCredit } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderCreditItemFactory } from './order-credit-item.factory';
import { MagentoOrderTotalFactory } from './order-total.factory';

export class MockOrderCredit implements MagentoOrderCredit {
  __typename: 'CreditMemo' = 'CreditMemo';
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  total = this.totalFactory.create({
    __typename: 'CreditMemoTotal',
  });

  constructor(
    private itemFactory: MagentoOrderCreditItemFactory,
    private totalFactory: MagentoOrderTotalFactory,
  ) {}
};


@Injectable({
  providedIn: 'root',
})
export class MagentoOrderCreditFactory extends DaffModelFactory<MagentoOrderCredit> {
  constructor(
    itemFactory: MagentoOrderCreditItemFactory,
    totalFactory: MagentoOrderTotalFactory,
  ) {
    super(
      MockOrderCredit,
      itemFactory,
      totalFactory,
    );
  }
}
