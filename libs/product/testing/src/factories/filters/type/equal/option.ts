import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductFilterEqualOption } from '@daffodil/product';

export class MockDaffProductFilterEqualOption implements DaffProductFilterEqualOption {
  applied = false;
  value = faker.datatype.uuid();
  label = faker.random.word();
  count = faker.datatype.number({ min: 1, max: 1000 });
}

/**
 * A factory for creating a {@link DaffProductFilterEqualOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterEqualOptionFactory extends DaffModelFactory<DaffProductFilterEqualOption> {
  constructor(){
    super(MockDaffProductFilterEqualOption);
  }
}
