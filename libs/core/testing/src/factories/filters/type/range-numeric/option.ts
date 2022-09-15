import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffFilterRangeOption } from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockFilterRangeNumericOption implements DaffFilterRangeOption<number> {
  value = faker.datatype.number({ min: 0, max: 10 });
  label = faker.random.alpha({ count: 3 });
}

/**
 * A factory for creating a {@link DaffFilterRangeOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRangeNumericOptionFactory extends DaffModelFactory<DaffFilterRangeOption<number>>{
  constructor(){
    super(MockFilterRangeNumericOption);
  }
}

