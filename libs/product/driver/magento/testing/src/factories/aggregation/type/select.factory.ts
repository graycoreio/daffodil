import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';

class MockMagentoAggregationSelect implements MagentoAggregation {
  __typename = 'Aggregation';
  attribute_code = 'select';
  type = MagentoProductFilterType.Equal;
  count = faker.number.int();
  label = faker.lorem.word();
  options =  [
    {
      count: faker.number.int(),
      label: faker.lorem.word(),
      value: faker.string.uuid(),
    },
    {
      count: faker.number.int(),
      label: faker.lorem.word(),
      value: faker.string.uuid(),
    },
    {
      count: faker.number.int(),
      label: faker.lorem.word(),
      value: faker.string.uuid(),
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductAggregationSelectFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(){
    super(MockMagentoAggregationSelect);
  }
}
