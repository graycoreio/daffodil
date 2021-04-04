import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffToggleCategoryFilterRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterToggleRequestEqualFactory } from './type/equal/toggle-request';
import { DaffCategoryFilterToggleRequestRangeNumericFactory } from './type/range-numeric/toggle-request';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestFactory extends DaffModelFactory<DaffToggleCategoryFilterRequest>{
  constructor(private equalFactory: DaffCategoryFilterToggleRequestEqualFactory, private rangeFactory: DaffCategoryFilterToggleRequestRangeNumericFactory){
    super(faker.random.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
