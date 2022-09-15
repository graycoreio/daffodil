import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffFilterEqualOption } from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterEqualOption implements DaffFilterEqualOption {
  applied = false;
  value = faker.datatype.uuid();
  label = faker.random.word();
  count = faker.datatype.number({ min: 1, max: 1000 });
}

/**
 * A factory for creating a {@link DaffFilterEqualOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterEqualOptionFactory extends DaffModelFactory<DaffFilterEqualOption> {
  constructor(){
    super(MockDaffFilterEqualOption);
  }
}
