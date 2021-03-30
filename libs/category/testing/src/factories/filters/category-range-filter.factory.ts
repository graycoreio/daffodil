import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryRangeFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export const DAFF_CATEGORY_TESTING_MINIMUM_RANGE_SIZE = 10;

export class MockCategoryRangeFilter implements DaffCategoryRangeFilter {
  type: DaffCategoryFilterType.Range = DaffCategoryFilterType.Range;
  label = faker.random.words();
  name = faker.random.word();
  _min = faker.random.number(20);
  min = this._min.toString();
  max = faker.random.number({
    min: this._min,
    max: this._min + faker.random.number({ min: 1, max: 1000 }),
  }).toString();
  options = [];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryRangeFilterFactory extends DaffModelFactory<DaffCategoryRangeFilter> {
  constructor() {
    super(MockCategoryRangeFilter);
  }
}
