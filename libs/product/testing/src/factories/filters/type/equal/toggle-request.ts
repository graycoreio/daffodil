import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterType,
} from '@daffodil/product';

export class MockDaffProductToggleFilterEqualRequest implements DaffProductFilterEqualToggleRequest {
  type: DaffProductFilterType.Equal = DaffProductFilterType.Equal;
  name = faker.random.word();
  value = faker.datatype.uuid();
}

/**
 * A factory for creating a {@link DaffProductFilterEqualToggleRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterToggleRequestEqualFactory extends DaffModelFactory<DaffProductFilterEqualToggleRequest>{
  constructor(){
    super(MockDaffProductToggleFilterEqualRequest);
  }
}
