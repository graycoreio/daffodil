import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShipment } from '@daffodil/order';

export class MockOrderShipment implements DaffOrderShipment {
  tracking = [];
  items = [];
  carrier = faker.random.word();
  carrier_title = faker.random.word();
  code = faker.random.word();
  method = faker.random.word();
  method_description = faker.random.word();
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentFactory extends DaffModelFactory<DaffOrderShipment> {
  constructor() {
    super(MockOrderShipment);
  }
}
