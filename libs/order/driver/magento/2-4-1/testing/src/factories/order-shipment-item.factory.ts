import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderShipmentItem } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderItemFactory } from './order-item.factory';

export class MockOrderShipmentItem implements MagentoOrderShipmentItem {
  __typename = <const>'ShipmentItem';
  order_item = this.itemFactory.create();
  quantity_shipped = faker.datatype.number({ min: 1, max: 100 });

  constructor(
    private itemFactory: MagentoOrderItemFactory,
  ) {}
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderShipmentItemFactory extends DaffModelFactory<MagentoOrderShipmentItem> {
  constructor(
    itemFactory: MagentoOrderItemFactory,
  ) {
    super(MockOrderShipmentItem, itemFactory);
  }
}
