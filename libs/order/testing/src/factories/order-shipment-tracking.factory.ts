import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShipmentTracking } from '@daffodil/order';

export class MockOrderShipmentTracking implements DaffOrderShipmentTracking {
  tracking_number = faker.random.alphaNumeric(16);
  tracking_url = faker.internet.url();
  carrier = faker.random.word();
  carrier_logo = faker.internet.url();
  title = faker.random.word();
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentTrackingFactory extends DaffModelFactory<DaffOrderShipmentTracking> {
  constructor() {
    super(MockOrderShipmentTracking);
  }
}
