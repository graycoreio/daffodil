import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryFilterRangeRequestOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterRangeNumericRequestOption implements DaffCategoryFilterRangeRequestOption<number> {
  min = faker.datatype.number({ min: 0, max: 100 });
  max = faker.datatype.number({ min: 100, max: 1000 });
}

/**
 * A factory for creating a {@link DaffCategoryFilterRangeRequestOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericRequestOptionFactory extends DaffModelFactory<DaffCategoryFilterRangeRequestOption<number>>{
  constructor(){
    super(MockDaffCategoryFilterRangeNumericRequestOption);
  }
}
