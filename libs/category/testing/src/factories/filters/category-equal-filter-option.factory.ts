import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterEqualOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryFilterEqualOption implements DaffCategoryFilterEqualOption {
  applied = faker.random.boolean();
  label = faker.random.words();
  value = faker.random.word();
  count = faker.random.number(100);
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterEqualOptionFactory extends DaffModelFactory<DaffCategoryFilterEqualOption> {
  constructor() {
    super(MockCategoryFilterEqualOption);
  }
}
