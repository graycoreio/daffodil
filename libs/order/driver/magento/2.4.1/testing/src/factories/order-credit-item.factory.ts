import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderCreditItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderItemFactory } from './order-item.factory';

export class MockOrderCreditItem implements MagentoOrderCreditItem {
  __typename: 'CreditMemoItem' = 'CreditMemoItem';
  order_item = this.itemFactory.create();
  quantity_refunded = faker.datatype.number({ min: 1, max: 100 });

  constructor(
    private itemFactory: MagentoOrderItemFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderCreditItemFactory extends DaffModelFactory<MagentoOrderCreditItem> {
  constructor(
    itemFactory: MagentoOrderItemFactory,
  ) {
    super(MockOrderCreditItem, itemFactory);
  }
}
