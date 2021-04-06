import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffToggleCategoryFilterRangeNumericRequest,
  DaffCategoryFilterRangeRequestOption,
} from '@daffodil/category';
import { DaffCategoryFilterType } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericRequestOptionFactory } from './request-option';

export class MockDaffToggleCategoryFilterRangeNumericRequest implements DaffToggleCategoryFilterRangeNumericRequest {
  type: DaffCategoryFilterType.RangeNumeric = DaffCategoryFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffCategoryFilterRangeRequestOption<number>;
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestRangeNumericFactory extends DaffModelFactory<DaffToggleCategoryFilterRangeNumericRequest>{
  constructor(private option: DaffCategoryFilterRangeNumericRequestOptionFactory) {
    super(MockDaffToggleCategoryFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffToggleCategoryFilterRangeNumericRequest> = {}): DaffToggleCategoryFilterRangeNumericRequest {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
