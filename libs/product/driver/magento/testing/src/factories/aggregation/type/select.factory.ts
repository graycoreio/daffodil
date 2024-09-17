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
  count = faker.datatype.number();
  label = faker.random.word();
  options =  [
    {
      count: faker.datatype.number(),
      label: faker.random.word(),
      value: faker.datatype.uuid(),
    },
    {
      count: faker.datatype.number(),
      label: faker.random.word(),
      value: faker.datatype.uuid(),
    },
    {
      count: faker.datatype.number(),
      label: faker.random.word(),
      value: faker.datatype.uuid(),
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
