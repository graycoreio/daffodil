import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffSortOption } from '@daffodil/core';

import { DaffModelFactory } from '../factory';

class MockDaffSortOption implements DaffSortOption {
  label = faker.lorem.word();
  value = faker.lorem.word();
}

@Injectable({
  providedIn: 'root',
})
export class DaffSortOptionFactory extends DaffModelFactory<DaffSortOption> {
  constructor() {
    super(MockDaffSortOption);
  }
}
