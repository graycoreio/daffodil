import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryFilterEqualOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterEqualOption implements DaffCategoryFilterEqualOption {
  applied = false;
  value = faker.datatype.uuid();
  label = faker.random.word();
  count = faker.datatype.number({ min: 1, max: 1000 });
}

/**
 * A factory for creating a {@link DaffCategoryFilterEqualOption}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterEqualOptionFactory extends DaffModelFactory<DaffCategoryFilterEqualOption> {
  constructor(){
    super(MockDaffCategoryFilterEqualOption);
  }
}
