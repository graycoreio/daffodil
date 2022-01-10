import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryFilterRangeNumeric implements DaffCategoryFilterRangeNumeric {
  type: DaffCategoryFilterType.RangeNumeric = DaffCategoryFilterType.RangeNumeric;
  label = faker.commerce.productMaterial();
  name = faker.datatype.uuid();
  min = faker.datatype.number({ min: 1, max: 10 });
  max = faker.datatype.number({ min: 10, max: 200 });
  options = {};
}

/**
 * A factory for creating a {@link DaffCategoryFilterRangeNumeric}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericFactory extends DaffModelFactory<DaffCategoryFilterRangeNumeric>{
  constructor(){
    super(MockCategoryFilterRangeNumeric);
  }
}
