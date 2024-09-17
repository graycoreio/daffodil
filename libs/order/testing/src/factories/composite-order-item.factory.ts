import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCompositeOrderItem,
  DaffOrderItemType,
} from '@daffodil/order';

import { MockOrderItem } from './order-item.factory';

export class MockCompositeOrderItem extends MockOrderItem implements DaffCompositeOrderItem {
  type = DaffOrderItemType.Composite;
  options = [
    {
      option_label: faker.random.word(),
      value_label: faker.random.word(),
    },
    {
      option_label: faker.random.word(),
      value_label: faker.random.word(),
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCompositeOrderItemFactory extends DaffModelFactory<DaffCompositeOrderItem> {
  constructor() {
    super(MockCompositeOrderItem);
  }
}
