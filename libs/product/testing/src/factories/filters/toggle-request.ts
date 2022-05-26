import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductFilterToggleRequest } from '@daffodil/product';

import { DaffProductFilterToggleRequestEqualFactory } from './type/equal/toggle-request';
import { DaffProductFilterToggleRequestRangeNumericFactory } from './type/range-numeric/toggle-request';

export class MockDaffProductToggleFilterRequest {

}

/**
 * A factory for creating a {@link DaffProductFilterToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterToggleRequestFactory extends DaffModelFactory<DaffProductFilterToggleRequest>{
  constructor(private equalFactory: DaffProductFilterToggleRequestEqualFactory, private rangeFactory: DaffProductFilterToggleRequestRangeNumericFactory){
    super(<any>MockDaffProductToggleFilterRequest);
  }

  create(partial?: Partial<DaffProductFilterToggleRequest>): DaffProductFilterToggleRequest {
    return {
      ...new this.type(),
      ...faker.datatype.number({ min: 1, max: 2 }) === 2 ? this.equalFactory.create() : this.rangeFactory.create(),
    };
  }
}
