import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffFilterEqualToggleRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterToggleEqualRequest implements DaffFilterEqualToggleRequest {
  type: DaffFilterType.Equal = DaffFilterType.Equal;
  name = faker.random.word();
  value = faker.datatype.uuid();
}

/**
 * A factory for creating a {@link DaffFilterEqualToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterToggleRequestEqualFactory extends DaffModelFactory<DaffFilterEqualToggleRequest>{
  constructor(){
    super(MockDaffFilterToggleEqualRequest);
  }
}
