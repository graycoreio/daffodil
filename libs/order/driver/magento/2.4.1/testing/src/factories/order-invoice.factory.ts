import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderInvoice } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderInvoiceItemFactory } from './order-invoice-item.factory';
import { MagentoOrderTotalFactory } from './order-total.factory';

export class MockOrderInvoice implements MagentoOrderInvoice {
  __typename: 'Invoice' = 'Invoice';
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  total = this.totalFactory.create();

  constructor(
    private itemFactory: MagentoOrderInvoiceItemFactory,
    private totalFactory: MagentoOrderTotalFactory,
  ) {}
};


@Injectable({
  providedIn: 'root',
})
export class MagentoOrderInvoiceFactory extends DaffModelFactory<MagentoOrderInvoice> {
  constructor(
    itemFactory: MagentoOrderInvoiceItemFactory,
    totalFactory: MagentoOrderTotalFactory,
  ) {
    super(
      MockOrderInvoice,
      itemFactory,
      totalFactory,
    );
  }
}
