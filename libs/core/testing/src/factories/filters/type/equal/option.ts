import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffFilterEqualOption } from '@daffodil/core';

import { DaffModelFactory } from '../../../factory';

export class MockDaffFilterEqualOption implements DaffFilterEqualOption {
  applied = false;
  value = faker.string.uuid();
  label = faker.lorem.word();
  count = faker.number.int({ min: 1, max: 1000 });
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
