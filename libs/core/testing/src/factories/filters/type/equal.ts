import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import {
  DaffFilterEqual,
  DaffFilterType,
} from '@daffodil/core';

import { DaffModelFactory } from '../../factory';

export class MockFilterEqual implements DaffFilterEqual {
  type: DaffFilterType.Equal = DaffFilterType.Equal;
  label = faker.random.word();
  name = faker.datatype.uuid();
  options = {};
}

/**
 * A factory for creating a {@link DaffFilterEqual}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffFilterEqualFactory extends DaffModelFactory<DaffFilterEqual>{
  constructor(){
    super(MockFilterEqual);
  }
}

