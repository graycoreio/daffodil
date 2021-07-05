import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryEqualFilter implements DaffCategoryFilterEqual {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  label = faker.commerce.productMaterial();
  name = faker.datatype.uuid();
  options = {};
}

/**
 * A factory for creating a {@link DaffCategoryFilterEqual}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterEqualFactory extends DaffModelFactory<DaffCategoryFilterEqual>{
  constructor(){
    super(MockCategoryEqualFilter);
  }
}

