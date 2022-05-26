import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffSortOption,
  DaffSortOptions,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffSortOptionFactory } from './sort-option.factory';

class MockDaffSortOptions implements DaffSortOptions {
  options = this.createOptions();
  default = faker.random.arrayElement(this.options).value;

  constructor(
    private optionFactory: DaffSortOptionFactory,
  ) {}

  private createOptions(): DaffSortOption[] {
    return this.optionFactory.createMany(faker.random.number({ min: 1, max: 5 }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffSortOptionsFactory extends DaffModelFactory<DaffSortOptions> {
  constructor(
    private optionFactory: DaffSortOptionFactory,
  ) {
    super(MockDaffSortOptions, optionFactory);
  }
}
