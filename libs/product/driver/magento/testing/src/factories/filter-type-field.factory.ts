import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductFilterTypeField,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';

const TYPES = [
  MagentoProductFilterType.Equal,
  MagentoProductFilterType.Range,
  MagentoProductFilterType.Match,
];

class MockMagentoProductFilterTypeField implements MagentoProductFilterTypeField {
  name = faker.random.word();
  type = {
    name: TYPES[faker.datatype.number({ min: 0, max: TYPES.length - 1 })],
  };
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductFilterTypeFieldFactory extends DaffModelFactory<MagentoProductFilterTypeField> {
  constructor(){
    super(MockMagentoProductFilterTypeField);
  }
}
