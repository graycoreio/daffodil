import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffToggleCategoryFilterEqualRequest implements DaffCategoryFilterEqualToggleRequest {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  name = faker.random.word();
  value = faker.datatype.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestEqualFactory extends DaffModelFactory<DaffCategoryFilterEqualToggleRequest>{
  constructor(){
    super(MockDaffToggleCategoryFilterEqualRequest);
  }
}
