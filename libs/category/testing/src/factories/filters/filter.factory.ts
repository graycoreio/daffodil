import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilter } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterEqualFactory } from './type/equal';
import { DaffCategoryFilterRangeNumericFactory } from './type/range-numeric';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterFactory extends DaffModelFactory<DaffCategoryFilter>{
  constructor(private equalFactory: DaffCategoryFilterEqualFactory, private rangeFactory: DaffCategoryFilterRangeNumericFactory){
    super(faker.random.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
