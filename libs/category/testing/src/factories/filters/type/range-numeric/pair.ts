import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeOption,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericOptionFactory } from './option';

export class MockDaffCategoryFilterRangeNumericPair implements DaffCategoryFilterRangePair<number> {
  applied: true = true;
  max: DaffCategoryFilterRangeOption<number>;
  min: DaffCategoryFilterRangeOption<number>;
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericPairFactory extends DaffModelFactory<DaffCategoryFilterRangePair<number>>{
  constructor(private option: DaffCategoryFilterRangeNumericOptionFactory){
    super(MockDaffCategoryFilterRangeNumericPair);
  }

  create(partial: Partial<DaffCategoryFilterRangePair<number>> = {}) {
    return {
      ...new this.type(),
      min: this.option.create({ value: faker.datatype.number({ min: 0, max: 100 }) }),
      max: this.option.create({ value: faker.datatype.number({ min: 100, max: 1000 }) }),
      ...partial,
    };
  }
}



