import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffFilterRangeRequestOption } from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterRangeNumericRequestOption implements DaffFilterRangeRequestOption<number> {
  min = faker.datatype.number({ min: 0, max: 100 });
  max = faker.datatype.number({ min: 100, max: 1000 });
}

/**
 * A factory for creating a {@link DaffFilterRangeRequestOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRangeNumericRequestOptionFactory extends DaffModelFactory<DaffFilterRangeRequestOption<number>>{
  constructor(){
    super(MockDaffFilterRangeNumericRequestOption);
  }
}
