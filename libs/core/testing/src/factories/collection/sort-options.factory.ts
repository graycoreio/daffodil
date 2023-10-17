import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffSortOption,
  DaffSortOptions,
} from '@daffodil/core';

import { DaffSortOptionFactory } from './sort-option.factory';
import { DaffModelFactory } from '../factory';

class MockDaffSortOptions implements DaffSortOptions {
  options = this.createOptions();
  default = faker.helpers.arrayElement(this.options).value;

  constructor(
    private optionFactory: DaffSortOptionFactory,
  ) {}

  private createOptions(): DaffSortOption[] {
    return this.optionFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffSortOptionsFactory extends DaffModelFactory<DaffSortOptions> {
  constructor(
    optionFactory: DaffSortOptionFactory,
  ) {
    super(MockDaffSortOptions, optionFactory);
  }
}
