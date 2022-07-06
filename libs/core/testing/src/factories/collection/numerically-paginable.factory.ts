import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffNumericallyPaginable } from '@daffodil/core';

import { DaffModelFactory } from '../factory';

class MockDaffNumericallyPaginable implements DaffNumericallyPaginable {
  total_pages = faker.datatype.number({ min: 1, max: 100 });
  current_page = faker.datatype.number(this.total_pages);
  page_size = faker.datatype.number({ min: 1, max: 100 });
}

@Injectable({
  providedIn: 'root',
})
export class DaffNumericallyPaginableFactory extends DaffModelFactory<DaffNumericallyPaginable> {
  constructor(){
    super(MockDaffNumericallyPaginable);
  }
}
