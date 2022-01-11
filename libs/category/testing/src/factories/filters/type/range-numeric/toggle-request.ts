import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCategoryFilterRangeNumericToggleRequest,
  DaffCategoryFilterRangeRequestOption,
} from '@daffodil/category';
import { DaffCategoryFilterType } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericRequestOptionFactory } from './request-option';

export class MockDaffToggleCategoryFilterRangeNumericRequest implements DaffCategoryFilterRangeNumericToggleRequest {
  type: DaffCategoryFilterType.RangeNumeric = DaffCategoryFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffCategoryFilterRangeRequestOption<number>;
}

/**
 * A factory for creating a {@link DaffCategoryFilterRangeNumericToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestRangeNumericFactory extends DaffModelFactory<DaffCategoryFilterRangeNumericToggleRequest>{
  constructor(private option: DaffCategoryFilterRangeNumericRequestOptionFactory) {
    super(MockDaffToggleCategoryFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffCategoryFilterRangeNumericToggleRequest> = {}): DaffCategoryFilterRangeNumericToggleRequest {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
