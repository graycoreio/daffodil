import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterRangeRequestOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterRangeNumericRequestOption implements DaffCategoryFilterRangeRequestOption<number> {
  min = faker.random.number({ min: 0, max: 100 });
  max = faker.random.number({ min: 100, max: 1000 });
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericRequestOptionFactory extends DaffModelFactory<DaffCategoryFilterRangeRequestOption<number>>{
  constructor(){
    super(MockDaffCategoryFilterRangeNumericRequestOption);
  }
}
