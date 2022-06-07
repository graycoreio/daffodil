import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterType,
  DaffProductFilterRangeRequestOption,
} from '@daffodil/product';

import { DaffProductFilterRangeNumericRequestOptionFactory } from './request-option';


export class MockDaffProductFilterRangeNumericRequest implements DaffProductFilterRangeNumericRequest {
  type: DaffProductFilterType.RangeNumeric = DaffProductFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffProductFilterRangeRequestOption<number>;
}

/**
 * A factory for creating a {@link DaffProductFilterRangeNumericRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRequestRangeNumericFactory extends DaffModelFactory<DaffProductFilterRangeNumericRequest>{
  constructor(private option: DaffProductFilterRangeNumericRequestOptionFactory = new DaffProductFilterRangeNumericRequestOptionFactory()){
    super(MockDaffProductFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffProductFilterRangeNumericRequest> = {}) {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}