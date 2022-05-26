import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterEqualRequest,
  DaffProductFilterType,
} from '@daffodil/product';

export class MockDaffProductFilterEqualRequest implements DaffProductFilterEqualRequest {
  type: DaffProductFilterType.Equal = DaffProductFilterType.Equal;
  name = faker.random.word();
  value = [faker.datatype.uuid()];
}

/**
 * A factory for creating a {@link DaffProductFilterEqualRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterRequestEqualFactory extends DaffModelFactory<DaffProductFilterEqualRequest>{
  constructor(){
    super(MockDaffProductFilterEqualRequest);
  }
}
