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
  sort_options = this.createOptions();
  applied_sort_option = faker.random.arrayElement(this.sort_options.options).value;
  applied_sort_direction = faker.random.arrayElement([DaffSortDirectionEnum.Ascending, DaffSortDirectionEnum.Descending]);

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
    private optionFactory: DaffSortOptionsFactory,
  ) {
    super(MockDaffSortable, optionFactory);
  }
}
