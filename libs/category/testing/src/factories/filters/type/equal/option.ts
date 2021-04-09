import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryFilterEqualOption } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterEqualOption implements DaffCategoryFilterEqualOption {
  applied = false;
	value = faker.random.uuid();
	label = faker.random.word();
	count = faker.random.number({ min: 1, max: 1000 });
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterEqualOptionFactory extends DaffModelFactory<DaffCategoryFilterEqualOption> {
  constructor(){
    super(MockDaffCategoryFilterEqualOption);
  }
}
