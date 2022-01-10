import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryFilterToggleRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterToggleRequestEqualFactory } from './type/equal/toggle-request';
import { DaffCategoryFilterToggleRequestRangeNumericFactory } from './type/range-numeric/toggle-request';

export class MockDaffToggleCategoryFilterRequest {

}

/**
 * A factory for creating a {@link DaffCategoryFilterToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestFactory extends DaffModelFactory<DaffCategoryFilterToggleRequest>{
  constructor(private equalFactory: DaffCategoryFilterToggleRequestEqualFactory, private rangeFactory: DaffCategoryFilterToggleRequestRangeNumericFactory){
    super(<any>MockDaffToggleCategoryFilterRequest);
  }

  create(partial?: Partial<DaffCategoryFilterToggleRequest>): DaffCategoryFilterToggleRequest {
    return {
      ...new this.type(),
      ...faker.datatype.number({ min: 1, max: 2 }) === 2 ? this.equalFactory.create() : this.rangeFactory.create(),
    };
  }
}
