import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCategoryFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterEqualFactory } from './type/equal';
import { DaffCategoryFilterRangeNumericFactory } from './type/range-numeric';

export class MockDaffCategoryFilter {

}

/**
 * A factory for creating a {@link DaffCategoryFilter}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterFactory extends DaffModelFactory<DaffCategoryFilter>{

  constructor(private equalFactory: DaffCategoryFilterEqualFactory, private rangeFactory: DaffCategoryFilterRangeNumericFactory){
    super(<any>MockDaffCategoryFilter);
  }

  create(partial: Partial<DaffCategoryFilter> = {}): DaffCategoryFilter {
    let factory;

    switch (partial.type) {
      case DaffCategoryFilterType.Equal:
        factory = this.equalFactory;
        break;
      case DaffCategoryFilterType.RangeNumeric:
        factory = this.rangeFactory;
        break;
      default:
        factory = faker.datatype.number({ min: 1, max: 2 }) === 2
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
