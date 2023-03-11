import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffFilter,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffFilterEqualFactory } from './type/equal';
import { DaffFilterRangeNumericFactory } from './type/range-numeric';

export class MockDaffFilter {

}

/**
 * A factory for creating a {@link DaffFilter}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterFactory extends DaffModelFactory<DaffFilter>{

  constructor(private equalFactory: DaffFilterEqualFactory, private rangeFactory: DaffFilterRangeNumericFactory){
    super(<any>MockDaffFilter);
  }

  create(partial: Partial<DaffFilter> = {}): DaffFilter {
    let factory;

    switch (partial.type) {
      case DaffFilterType.Equal:
        factory = this.equalFactory;
        break;
      case DaffFilterType.RangeNumeric:
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
