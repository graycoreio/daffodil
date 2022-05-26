import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductFilterRequest } from '@daffodil/product';

import { DaffProductFilterRequestEqualFactory } from './type/equal/request';
import { DaffProductFilterRequestRangeNumericFactory } from './type/range-numeric/request';

/**
 * A factory for creating a {@link DaffProductFilterRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRequestFactory extends DaffModelFactory<DaffProductFilterRequest>{
  constructor(private equalFactory: DaffProductFilterRequestEqualFactory, private rangeFactory: DaffProductFilterRequestRangeNumericFactory){
    super(faker.datatype.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
