import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  MagentoCategoryFilterTypeField,
  MagentoCategoryFilterType,
} from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

const TYPES = [
  MagentoCategoryFilterType.Equal,
  MagentoCategoryFilterType.Range,
  MagentoCategoryFilterType.Match,
];

class MockMagentoCategoryFilterTypeField implements MagentoCategoryFilterTypeField {
  name = faker.random.word();
  type = {
    name: TYPES[faker.random.number({ min: 0, max: TYPES.length - 1 })],
  };
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory extends DaffModelFactory<MagentoCategoryFilterTypeField> {
  constructor(){
    super(MockMagentoCategoryFilterTypeField);
  }
}
