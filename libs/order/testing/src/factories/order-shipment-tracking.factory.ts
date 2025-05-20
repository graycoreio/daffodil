import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShipmentTracking } from '@daffodil/order';

export class MockOrderShipmentTracking implements DaffOrderShipmentTracking {
  tracking_number = faker.string.alphanumeric(16);
  tracking_url = faker.internet.url();
  carrier = faker.lorem.word();
  carrier_logo = faker.internet.url();
  title = faker.lorem.word();
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentTrackingFactory extends DaffModelFactory<DaffOrderShipmentTracking> {
  constructor() {
    super(MockOrderShipmentTracking);
  }
}
