import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffFilterRequest } from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffFilterRequestEqualFactory } from './type/equal/request';
import { DaffFilterRequestRangeNumericFactory } from './type/range-numeric/request';

/**
 * A factory for creating a {@link DaffFilterRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRequestFactory extends DaffModelFactory<DaffFilterRequest>{
  constructor(equalFactory: DaffFilterRequestEqualFactory, rangeFactory: DaffFilterRequestRangeNumericFactory){
    super(faker.datatype.number({ min: 1, max: 2 }) === 2 ? equalFactory.type : rangeFactory.type);
  }
}
