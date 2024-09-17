import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';

class MockMagentoAggregationPrice implements MagentoAggregation {
  __typename = 'Aggregation';
  attribute_code = 'price';
  type = MagentoProductFilterType.Range;
  count = faker.datatype.number();
  label = 'Price';
  options = [
    {
      value: '0-10',
      count: faker.datatype.number(),
      label: '0-10',
    },
    {
      value: '10-20',
      count: faker.datatype.number(),
      label: '10-20',
    },
    {
      value: '20-30',
      count: faker.datatype.number(),
      label: '20-30',
    },
    {
      value: '30-40',
      count: faker.datatype.number(),
      label: '30-40',
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductAggregationPriceFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(){
    super(MockMagentoAggregationPrice);
  }
}
