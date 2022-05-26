import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterRangePair,
  DaffProductFilterRangeOption,
} from '@daffodil/product';

import { DaffProductFilterRangeNumericOptionFactory } from './option';

export class MockDaffProductFilterRangeNumericPair implements DaffProductFilterRangePair<number> {
  applied: true = true;
  max: DaffProductFilterRangeOption<number>;
  min: DaffProductFilterRangeOption<number>;
}

/**
 * A factory for creating a {@link DaffProductFilterRangePair}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRangeNumericPairFactory extends DaffModelFactory<DaffProductFilterRangePair<number>>{
  constructor(private option: DaffProductFilterRangeNumericOptionFactory){
    super(MockDaffProductFilterRangeNumericPair);
  }

  create(partial: Partial<DaffProductFilterRangePair<number>> = {}) {
    return {
      ...new this.type(),
      min: this.option.create({ value: faker.datatype.number({ min: 0, max: 100 }) }),
      max: this.option.create({ value: faker.datatype.number({ min: 100, max: 1000 }) }),
      ...partial,
    };
  }
}



