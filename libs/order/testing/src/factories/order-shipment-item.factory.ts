import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderShipmentItem } from '@daffodil/order';

export class MockOrderShipmentItem implements DaffOrderShipmentItem {
  item = null;
  qty = faker.datatype.number({ min: 1, max: 100 });
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderShipmentItemFactory extends DaffModelFactory<DaffOrderShipmentItem> {
  constructor() {
    super(MockOrderShipmentItem);
  }
}
