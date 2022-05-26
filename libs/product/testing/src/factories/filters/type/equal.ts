import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductFilterEqual,
  DaffProductFilterType,
} from '@daffodil/product';

export class MockProductEqualFilter implements DaffProductFilterEqual {
  type: DaffProductFilterType.Equal = DaffProductFilterType.Equal;
  label = faker.commerce.productMaterial();
  name = faker.datatype.uuid();
  options = {};
}

/**
 * A factory for creating a {@link DaffProductFilterEqual}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFilterEqualFactory extends DaffModelFactory<DaffProductFilterEqual>{
  constructor(){
    super(MockProductEqualFilter);
  }
}

