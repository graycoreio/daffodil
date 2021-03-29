import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilter } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { MockCategoryEqualFilter } from './type/equal';
import { MockCategoryRangeFilter } from './type/range';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterFactory extends DaffModelFactory<DaffCategoryFilter>{
  constructor(){
    super(faker.random.number({ min: 1, max: 2 }) === 2 ? MockCategoryRangeFilter : MockCategoryEqualFilter);
  }
}
