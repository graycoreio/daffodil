import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductFilterRangeRequestOption } from '@daffodil/product';

export class MockDaffProductFilterRangeNumericRequestOption implements DaffProductFilterRangeRequestOption<number> {
  min = faker.datatype.number({ min: 0, max: 100 });
  max = faker.datatype.number({ min: 100, max: 1000 });
}

/**
 * A factory for creating a {@link DaffProductFilterRangeRequestOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRangeNumericRequestOptionFactory extends DaffModelFactory<DaffProductFilterRangeRequestOption<number>>{
  constructor(){
    super(MockDaffProductFilterRangeNumericRequestOption);
  }
}
