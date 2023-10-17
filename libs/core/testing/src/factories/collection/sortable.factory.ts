import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffSortable,
  DaffSortDirectionEnum,
  DaffSortOptions,
} from '@daffodil/core';

import { DaffSortOptionsFactory } from './sort-options.factory';
import { DaffModelFactory } from '../factory';

class MockDaffSortable implements DaffSortable {
  sortOptions = this.createOptions();
  appliedSortOption = faker.helpers.arrayElement(this.sortOptions.options).value;
  appliedSortDirection = faker.helpers.arrayElement([DaffSortDirectionEnum.Ascending, DaffSortDirectionEnum.Descending]);

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
