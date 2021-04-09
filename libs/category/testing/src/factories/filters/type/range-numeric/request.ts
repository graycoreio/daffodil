import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterRangeRequestOption,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterRangeNumericRequestOptionFactory } from './request-option';


export class MockDaffCategoryFilterRangeNumericRequest implements DaffCategoryFilterRangeNumericRequest {
  type: DaffCategoryFilterType.RangeNumeric = DaffCategoryFilterType.RangeNumeric;
  name = faker.random.word();
  value: DaffCategoryFilterRangeRequestOption<number>;
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRequestRangeNumericFactory extends DaffModelFactory<DaffCategoryFilterRangeNumericRequest>{
  constructor(private option: DaffCategoryFilterRangeNumericRequestOptionFactory = new DaffCategoryFilterRangeNumericRequestOptionFactory()){
    super(MockDaffCategoryFilterRangeNumericRequest);
  }

  create(partial: Partial<DaffCategoryFilterRangeNumericRequest> = {}) {
    return {
      ...new this.type(),
      value: this.option.create(),
      ...partial,
    };
  }
}
