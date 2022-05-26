import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterRangeNumericToggleRequest,
  DaffProductFilterRangeRequestOption,
} from '@daffodil/product';
import { DaffProductFilterType } from '@daffodil/product';

import { DaffProductFilterRangeNumericRequestOptionFactory } from './request-option';

export class MockDaffProductToggleFilterRangeNumericRequest implements DaffProductFilterRangeNumericToggleRequest {
  type: DaffProductFilterType.RangeNumeric = DaffProductFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffProductFilterRangeRequestOption<number>;
}

/**
 * A factory for creating a {@link DaffProductFilterRangeNumericToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterToggleRequestRangeNumericFactory extends DaffModelFactory<DaffProductFilterRangeNumericToggleRequest>{
  constructor(private option: DaffProductFilterRangeNumericRequestOptionFactory) {
    super(MockDaffProductToggleFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffProductFilterRangeNumericToggleRequest> = {}): DaffProductFilterRangeNumericToggleRequest {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
