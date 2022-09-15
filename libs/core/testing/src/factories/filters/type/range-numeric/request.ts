import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffFilterRangeNumericRequest,
  DaffFilterType,
  DaffFilterRangeRequestOption,
} from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';
import { DaffFilterRangeNumericRequestOptionFactory } from './request-option';


export class MockDaffFilterRangeNumericRequest implements DaffFilterRangeNumericRequest {
  type: DaffFilterType.RangeNumeric = DaffFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffFilterRangeRequestOption<number>;
}

/**
 * A factory for creating a {@link DaffFilterRangeNumericRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRequestRangeNumericFactory extends DaffModelFactory<DaffFilterRangeNumericRequest>{
  constructor(private option: DaffFilterRangeNumericRequestOptionFactory = new DaffFilterRangeNumericRequestOptionFactory()){
    super(MockDaffFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffFilterRangeNumericRequest> = {}) {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
