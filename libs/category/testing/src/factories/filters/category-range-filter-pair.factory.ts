import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterRangePair } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryFilterRangePair implements DaffCategoryFilterRangePair {
  applied = faker.random.boolean();
  _min = faker.random.number(20);
  min = this._min.toString();
  max = faker.random.number({
    min: this._min,
    max: this._min + faker.random.number({ min: 1, max: 1000 }),
  }).toString();
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangePairFactory extends DaffModelFactory<DaffCategoryFilterRangePair> {
  constructor() {
    super(MockCategoryFilterRangePair);
  }
}
