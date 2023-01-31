import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShipmentItem } from '@daffodil/order';

import { DaffOrderItemFactory } from './order-item.factory';

export class MockOrderShipmentItem implements DaffOrderShipmentItem {
  item = this.itemFactory.create();
  qty = faker.datatype.number({ min: 1, max: 100 });

  constructor(
    private itemFactory: DaffOrderItemFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentItemFactory extends DaffModelFactory<DaffOrderShipmentItem> {
  constructor(
    itemFactory: DaffOrderItemFactory,
  ) {
    super(MockOrderShipmentItem, itemFactory);
  }
}
