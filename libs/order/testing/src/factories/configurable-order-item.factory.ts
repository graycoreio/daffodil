import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffConfigurableOrderItem,
  DaffOrderItemType,
} from '@daffodil/order';

import { MockOrderItem } from './order-item.factory';

export class MockConfigurableOrderItem extends MockOrderItem implements DaffConfigurableOrderItem {
  type = DaffOrderItemType.Configurable;
  attributes = [
    {
      attribute_label: 'Color',
      value_label: 'Red',
    },
    {
      attribute_label: 'Size',
      value_label: 'M',
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class DaffConfigurableOrderItemFactory extends DaffModelFactory<DaffConfigurableOrderItem> {
  constructor() {
    super(MockConfigurableOrderItem);
  }
}
