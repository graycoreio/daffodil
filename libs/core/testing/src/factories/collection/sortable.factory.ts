import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffSortable,
  DaffSortDirectionEnum,
  DaffSortOptions,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffSortOptionsFactory } from './sort-options.factory';

class MockDaffSortable implements DaffSortable {
  sortOptions = this.createOptions();
  appliedSortOption = faker.random.arrayElement(this.sortOptions.options).value;
  appliedSortDirection = faker.random.arrayElement([DaffSortDirectionEnum.Ascending, DaffSortDirectionEnum.Descending]);

  constructor(
    private optionFactory: DaffSortOptionsFactory,
  ) {}

  private createOptions(): DaffSortOptions {
    return this.optionFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffSortableFactory extends DaffModelFactory<DaffSortable> {
  constructor(
    optionFactory: DaffSortOptionsFactory,
  ) {
    super(MockDaffSortable, optionFactory);
  }
}
