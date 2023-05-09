import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';

export class MockOrderTotal implements DaffOrderTotal {
  label = faker.random.word();
  value = faker.datatype.number({ min: 1, max: 100 });
  sort_order = faker.datatype.number({ min: 1, max: 100 });
  type = DaffOrderTotalTypeEnum.GrandTotal;
};

@Injectable({
  providedIn: 'root',
})
export class DaffOrderTotalFactory extends DaffModelFactory<DaffOrderTotal> {
  constructor() {
    super(MockOrderTotal);
  }
}
