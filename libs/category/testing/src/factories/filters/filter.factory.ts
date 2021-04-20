import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterEqualFactory } from './type/equal';
import { DaffCategoryFilterRangeNumericFactory } from './type/range-numeric';

export class MockDaffCategoryFilter {

}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterFactory extends DaffModelFactory<DaffCategoryFilterReplacement>{

  constructor(private equalFactory: DaffCategoryFilterEqualFactory, private rangeFactory: DaffCategoryFilterRangeNumericFactory){
    super(<any>MockDaffCategoryFilter);
  }

  create(partial: Partial<DaffCategoryFilterReplacement> = {}): DaffCategoryFilterReplacement {
    let factory;

    switch (partial.type) {
      case DaffCategoryFilterTypeReplacement.Equal:
        factory = this.equalFactory;
        break;
      case DaffCategoryFilterTypeReplacement.RangeNumeric:
        factory = this.rangeFactory;
        break;
      default:
        factory = faker.random.number({ min: 1, max: 2 }) === 2
          ? this.equalFactory
          : this.rangeFactory;
        break;
    }
    return {
      ...new this.type(),
      ...factory.create(partial),
    };
  }
}
