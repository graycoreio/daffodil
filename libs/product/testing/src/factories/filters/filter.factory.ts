import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilter,
  DaffProductFilterType,
} from '@daffodil/product';

import { DaffProductFilterEqualFactory } from './type/equal';
import { DaffProductFilterRangeNumericFactory } from './type/range-numeric';

export class MockDaffProductFilter {

}

/**
 * A factory for creating a {@link DaffProductFilter}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterFactory extends DaffModelFactory<DaffProductFilter>{

  constructor(private equalFactory: DaffProductFilterEqualFactory, private rangeFactory: DaffProductFilterRangeNumericFactory){
    super(<any>MockDaffProductFilter);
  }

  create(partial: Partial<DaffProductFilter> = {}): DaffProductFilter {
    let factory;

    switch (partial.type) {
      case DaffProductFilterType.Equal:
        factory = this.equalFactory;
        break;
      case DaffProductFilterType.RangeNumeric:
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
