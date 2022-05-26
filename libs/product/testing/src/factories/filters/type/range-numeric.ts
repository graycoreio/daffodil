import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterType,
} from '@daffodil/product';

export class MockProductFilterRangeNumeric implements DaffProductFilterRangeNumeric {
  type: DaffProductFilterType.RangeNumeric = DaffProductFilterType.RangeNumeric;
  label = faker.commerce.productMaterial();
  name = faker.datatype.uuid();
  min = faker.datatype.number({ min: 1, max: 10 });
  max = faker.datatype.number({ min: 10, max: 200 });
  options = {};
}

/**
 * A factory for creating a {@link DaffProductFilterRangeNumeric}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRangeNumericFactory extends DaffModelFactory<DaffProductFilterRangeNumeric>{
  constructor(){
    super(MockProductFilterRangeNumeric);
  }
}
