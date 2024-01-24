import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffFilterRangePair,
  DaffFilterRangeOption,
} from '@daffodil/core';

import { DaffFilterRangeNumericOptionFactory } from './option';
import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterRangeNumericPair implements DaffFilterRangePair<number> {
  applied = <const>true;
  max: DaffFilterRangeOption<number>;
  min: DaffFilterRangeOption<number>;
}

/**
 * A factory for creating a {@link DaffFilterRangePair}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRangeNumericPairFactory extends DaffModelFactory<DaffFilterRangePair<number>>{
  constructor(private option: DaffFilterRangeNumericOptionFactory){
    super(MockDaffFilterRangeNumericPair);
  }

  create(partial: Partial<DaffFilterRangePair<number>> = {}) {
    return {
      ...new this.type(),
      min: this.option.create({ value: faker.datatype.number({ min: 0, max: 100 }) }),
      max: this.option.create({ value: faker.datatype.number({ min: 100, max: 1000 }) }),
      ...partial,
    };
  }
}



