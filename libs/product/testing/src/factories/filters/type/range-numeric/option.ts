import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductFilterRangeOption } from '@daffodil/product';

export class MockProductFilterRangeNumericOption implements DaffProductFilterRangeOption<number> {
  value = faker.datatype.number({ min: 0, max: 10 });
  label = faker.random.alpha({ count: 3 });
}

/**
 * A factory for creating a {@link DaffProductFilterRangeOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRangeNumericOptionFactory extends DaffModelFactory<DaffProductFilterRangeOption<number>>{
  constructor(){
    super(MockProductFilterRangeNumericOption);
  }
}

