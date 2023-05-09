import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffFilterToggleRequest } from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffFilterToggleRequestEqualFactory } from './type/equal/toggle-request';
import { DaffFilterToggleRequestRangeNumericFactory } from './type/range-numeric/toggle-request';

export class MockDaffFilterToggleRequest {

}

/**
 * A factory for creating a {@link DaffFilterToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterToggleRequestFactory extends DaffModelFactory<DaffFilterToggleRequest>{
  constructor(private equalFactory: DaffFilterToggleRequestEqualFactory, private rangeFactory: DaffFilterToggleRequestRangeNumericFactory){
    super(<any>MockDaffFilterToggleRequest);
  }

  create(partial?: Partial<DaffFilterToggleRequest>): DaffFilterToggleRequest {
    return {
      ...new this.type(),
      ...faker.datatype.number({ min: 1, max: 2 }) === 2 ? this.equalFactory.create() : this.rangeFactory.create(),
    };
  }
}
