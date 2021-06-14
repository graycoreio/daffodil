import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterEqualRequest implements DaffCategoryFilterEqualRequest {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  name = faker.random.word();
  value = [faker.datatype.uuid()];
}

/**
 * A factory for creating a {@link DaffCategoryFilterEqualRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRequestEqualFactory extends DaffModelFactory<DaffCategoryFilterEqualRequest>{
  constructor(){
    super(MockDaffCategoryFilterEqualRequest);
  }
}
