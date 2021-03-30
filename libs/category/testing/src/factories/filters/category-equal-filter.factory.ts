import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryEqualFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryEqualFilter implements DaffCategoryEqualFilter {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  label = faker.random.words();
  name = faker.random.word();
  options = [];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryEqualFilterFactory extends DaffModelFactory<DaffCategoryEqualFilter> {
  constructor() {
    super(MockCategoryEqualFilter);
  }
}
