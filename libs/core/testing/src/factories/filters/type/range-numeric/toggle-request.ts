import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffFilterRangeNumericToggleRequest,
  DaffFilterRangeRequestOption,
} from '@daffodil/core';
import { DaffFilterType } from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';
import { DaffFilterRangeNumericRequestOptionFactory } from './request-option';

export class MockDaffFilterToggleRangeNumericRequest implements DaffFilterRangeNumericToggleRequest {
  type: DaffFilterType.RangeNumeric = DaffFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffFilterRangeRequestOption<number>;
}

/**
 * A factory for creating a {@link DaffFilterRangeNumericToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterToggleRequestRangeNumericFactory extends DaffModelFactory<DaffFilterRangeNumericToggleRequest>{
  constructor(private option: DaffFilterRangeNumericRequestOptionFactory) {
    super(MockDaffFilterToggleRangeNumericRequest);
  }

  create(partial: Partial<DaffFilterRangeNumericToggleRequest> = {}): DaffFilterRangeNumericToggleRequest {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
