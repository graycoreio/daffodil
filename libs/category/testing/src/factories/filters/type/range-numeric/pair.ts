import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeOption,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericOptionFactory } from './option';

export class MockDaffCategoryFilterRangeNumericPair implements DaffCategoryFilterRangePair<number> {
  applied: true = true;
  max: DaffCategoryFilterRangeOption<number> = this.createMaxOption();
  min: DaffCategoryFilterRangeOption<number> = this.createMinOption();

  constructor(
    private optionFactory: DaffCategoryFilterRangeNumericOptionFactory,
  ) {}

  protected createMinOption(): DaffCategoryFilterRangeOption<number> {
    return this.optionFactory.create({ value: faker.datatype.number({ min: 0, max: 100 }) });
  }

  protected createMaxOption(): DaffCategoryFilterRangeOption<number> {
    return this.optionFactory.create({ value: faker.datatype.number({ min: 100, max: 1000 }) });
  }
}

/**
 * A factory for creating a {@link DaffCategoryFilterRangePair}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRangeNumericPairFactory extends DaffModelFactory<DaffCategoryFilterRangePair<number>>{
  constructor(
    optionFactory: DaffCategoryFilterRangeNumericOptionFactory,
  ) {
    super(MockDaffCategoryFilterRangeNumericPair, optionFactory);
  }
}



