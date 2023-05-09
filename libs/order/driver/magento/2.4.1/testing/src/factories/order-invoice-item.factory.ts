import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderInvoiceItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderItemFactory } from './order-item.factory';

export class MockOrderInvoiceItem implements MagentoOrderInvoiceItem {
  __typename: 'InvoiceItem' = 'InvoiceItem';
  order_item = this.itemFactory.create();
  quantity_invoiced = faker.datatype.number({ min: 1, max: 100 });

  constructor(
    private itemFactory: MagentoOrderItemFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderInvoiceItemFactory extends DaffModelFactory<MagentoOrderInvoiceItem> {
  constructor(
    itemFactory: MagentoOrderItemFactory,
  ) {
    super(MockOrderInvoiceItem, itemFactory);
  }
}
