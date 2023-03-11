import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderShipmentTracking } from '@daffodil/order/driver/magento/2.4.1';

export class MockOrderShipmentTracking implements MagentoOrderShipmentTracking {
  __typename: 'ShipmentTracking' = 'ShipmentTracking';
  number = faker.random.alphaNumeric(16);
  carrier = faker.random.word();
  title = faker.random.word();
};

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderShipmentTrackingFactory extends DaffModelFactory<MagentoOrderShipmentTracking> {
  constructor() {
    super(MockOrderShipmentTracking);
  }
}
