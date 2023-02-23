import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffSortOption } from '@daffodil/core';

import { DaffModelFactory } from '../factory';

class MockDaffSortOption implements DaffSortOption {
  label = faker.random.word();
  value = faker.random.word();
}

@Injectable({
  providedIn: 'root',
})
export class DaffSortOptionFactory extends DaffModelFactory<DaffSortOption> {
  constructor() {
    super(MockDaffSortOption);
  }
}
