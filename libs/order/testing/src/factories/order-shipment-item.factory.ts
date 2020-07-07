import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderShipmentItem } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderShipmentItem implements DaffOrderShipmentItem {
  item = null;
  qty = faker.random.number({min: 1, max: 100});
};

@Injectable({
  providedIn: 'root'
})
export class DaffOrderShipmentItemFactory extends DaffModelFactory<DaffOrderShipmentItem> {
  constructor() {
    super(MockOrderShipmentItem);
  }
}
