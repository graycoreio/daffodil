import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderShipmentTracking } from '@daffodil/order/driver/magento/2-4-1';

export class MockOrderShipmentTracking implements MagentoOrderShipmentTracking {
  __typename = <const>'ShipmentTracking';
  number = faker.string.alphanumeric(16);
  carrier = faker.lorem.word();
  title = faker.lorem.word();
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderShipmentTrackingFactory extends DaffModelFactory<MagentoOrderShipmentTracking> {
  constructor() {
    super(MockOrderShipmentTracking);
  }
}
