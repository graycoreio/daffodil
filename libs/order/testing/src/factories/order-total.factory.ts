import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderTotal } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderTotal implements DaffOrderTotal {
  label = faker.random.word();
  value = faker.random.number({min: 1, max: 100});
  sort_order = faker.random.number({min: 1, max: 100});
};

@Injectable({
  providedIn: 'root'
})
export class DaffOrderTotalFactory extends DaffModelFactory<DaffOrderTotal> {
  constructor() {
    super(MockOrderTotal);
  }
}
