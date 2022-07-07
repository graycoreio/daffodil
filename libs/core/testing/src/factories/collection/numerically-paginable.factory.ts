import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffNumericallyPaginable } from '@daffodil/core';

import { DaffModelFactory } from '../factory';

class MockDaffNumericallyPaginable implements DaffNumericallyPaginable {
  totalPages = faker.datatype.number({ min: 1, max: 100 });
  currentPage = faker.datatype.number(this.totalPages);
  pageSize = faker.datatype.number({ min: 1, max: 100 });
}

@Injectable({
  providedIn: 'root',
})
export class DaffNumericallyPaginableFactory extends DaffModelFactory<DaffNumericallyPaginable> {
  constructor(){
    super(MockDaffNumericallyPaginable);
  }
}
