import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryFilterRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRequestEqualFactory } from './type/equal/request';
import { DaffCategoryFilterRequestRangeNumericFactory } from './type/range-numeric/request';

/**
 * A factory for creating a {@link DaffCategoryFilterRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRequestFactory extends DaffModelFactory<DaffCategoryFilterRequest>{
  constructor(private equalFactory: DaffCategoryFilterRequestEqualFactory, private rangeFactory: DaffCategoryFilterRequestRangeNumericFactory){
    super(faker.datatype.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
