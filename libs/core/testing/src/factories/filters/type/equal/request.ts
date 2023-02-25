import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import {
  DaffFilterEqualRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterEqualRequest implements DaffFilterEqualRequest {
  type: DaffFilterType.Equal = DaffFilterType.Equal;
  name = faker.random.word();
  value = [faker.datatype.uuid()];
}

/**
 * A factory for creating a {@link DaffFilterEqualRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterRequestEqualFactory extends DaffModelFactory<DaffFilterEqualRequest>{
  constructor(){
    super(MockDaffFilterEqualRequest);
  }
}
