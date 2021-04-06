import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffToggleCategoryFilterRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterToggleRequestEqualFactory } from './type/equal/toggle-request';
import { DaffCategoryFilterToggleRequestRangeNumericFactory } from './type/range-numeric/toggle-request';

export class MockDaffToggleCategoryFilterRequest {

}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestFactory extends DaffModelFactory<DaffToggleCategoryFilterRequest>{
  constructor(private equalFactory: DaffCategoryFilterToggleRequestEqualFactory, private rangeFactory: DaffCategoryFilterToggleRequestRangeNumericFactory){
    super(<any>MockDaffToggleCategoryFilterRequest);
  }

  create(partial?: Partial<DaffToggleCategoryFilterRequest>): DaffToggleCategoryFilterRequest {
    return {
      ...new this.type(),
      ...faker.random.number({ min: 1, max: 2 }) === 2 ? this.equalFactory.create() : this.rangeFactory.create(),
    };
  }
}
