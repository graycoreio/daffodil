import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryFilterEqualRequestReplacement,
  DaffCategoryFilterTypeReplacement,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCategoryFilterEqualRequest implements DaffCategoryFilterEqualRequestReplacement {
  type: DaffCategoryFilterTypeReplacement.Equal = DaffCategoryFilterTypeReplacement.Equal;
  name = faker.random.word();
  value = [faker.random.uuid()];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterRequestEqualFactory extends DaffModelFactory<DaffCategoryFilterEqualRequestReplacement>{
  constructor(){
    super(MockDaffCategoryFilterEqualRequest);
  }
}
