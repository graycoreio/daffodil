import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterRangeOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryFilterRangeNumericOption implements DaffCategoryFilterRangeOption<number> {
  value = faker.datatype.number({ min: 0, max: 10 });
  label = faker.random.alpha({ count: 3 });
}

/**
 * A factory for creating a {@link DaffCategoryFilterRangeOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericOptionFactory extends DaffModelFactory<DaffCategoryFilterRangeOption<number>>{
  constructor(){
    super(MockCategoryFilterRangeNumericOption);
  }
}

