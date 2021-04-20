import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterRequestReplacement } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRequestEqualFactory } from './type/equal/request';
import { DaffCategoryFilterRequestRangeNumericFactory } from './type/range-numeric/request';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRequestReplacementFactory extends DaffModelFactory<DaffCategoryFilterRequestReplacement>{
  constructor(private equalFactory: DaffCategoryFilterRequestEqualFactory, private rangeFactory: DaffCategoryFilterRequestRangeNumericFactory){
    super(faker.random.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
