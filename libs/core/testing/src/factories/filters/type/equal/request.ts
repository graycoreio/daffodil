import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffFilterEqualRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterEqualRequest implements DaffFilterEqualRequest {
  type: DaffFilterType.Equal = DaffFilterType.Equal;
  name = faker.lorem.word();
  value = [faker.string.uuid()];
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
