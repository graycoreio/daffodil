import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  daffCategoryFilterEqualOptionArrayToDict,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryFilterEqualOptionFactory } from './equal/public_api';

export class MockCategoryEqualFilter implements DaffCategoryFilterEqual {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  label = faker.commerce.productMaterial();
  name = faker.datatype.uuid();
  options = daffCategoryFilterEqualOptionArrayToDict(this.createOptions());

  constructor(
    private optionFactory: DaffCategoryFilterEqualOptionFactory,
  ) {}

  protected createOptions(): DaffCategoryFilterEqualOption[] {
    return this.optionFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }
}

/**
 * A factory for creating a {@link DaffCategoryFilterEqual}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterEqualFactory extends DaffModelFactory<DaffCategoryFilterEqual>{
  constructor(
    optionFactory: DaffCategoryFilterEqualOptionFactory,
  ) {
    super(MockCategoryEqualFilter, optionFactory);
  }
}

