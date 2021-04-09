import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilter,
  DaffCategoryFilterBase,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterEqualFactory } from './type/equal';
import { DaffCategoryFilterRangeNumericFactory } from './type/range-numeric';

export class MockDaffCategoryFilter {

}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterFactory extends DaffModelFactory<DaffCategoryFilterBase>{

  constructor(private equalFactory: DaffCategoryFilterEqualFactory, private rangeFactory: DaffCategoryFilterRangeNumericFactory){
    super(<any>MockDaffCategoryFilter);
  }

  create(partial: Partial<DaffCategoryFilterBase> = {}): DaffCategoryFilterBase {
    return {
      ...new this.type(),
      ...faker.random.number({ min: 1, max: 2 }) === 2 ? this.equalFactory.create(partial) : this.rangeFactory.create(partial),
    };
  }
}
