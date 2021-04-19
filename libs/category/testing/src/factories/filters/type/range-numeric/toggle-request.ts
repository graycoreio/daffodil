import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterRangeNumericToggleRequest,
  DaffCategoryFilterRangeRequestOption,
} from '@daffodil/category';
import { DaffCategoryFilterTypeReplacement } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericRequestOptionFactory } from './request-option';

export class MockDaffToggleCategoryFilterRangeNumericRequest implements DaffCategoryFilterRangeNumericToggleRequest {
  type: DaffCategoryFilterTypeReplacement.RangeNumeric = DaffCategoryFilterTypeReplacement.RangeNumeric;
  name = faker.random.word();
  value: DaffCategoryFilterRangeRequestOption<number>;
}

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
