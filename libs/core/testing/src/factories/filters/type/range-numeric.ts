import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffFilterRangeNumeric,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../../factory';

export class MockFilterRangeNumeric implements DaffFilterRangeNumeric {
  type: DaffFilterType.RangeNumeric = DaffFilterType.RangeNumeric;
  label = faker.random.word();
  name = faker.datatype.uuid();
  min = faker.datatype.number({ min: 1, max: 10 });
  max = faker.datatype.number({ min: 10, max: 200 });
  options = {};
}

/**
 * A factory for creating a {@link DaffFilterRangeNumeric}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRangeNumericFactory extends DaffModelFactory<DaffFilterRangeNumeric>{
  constructor(){
    super(MockFilterRangeNumeric);
  }
}
