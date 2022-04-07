import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  MagentoAggregation,
  MagentoCategoryFilterType,
} from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoAggregationSelect implements MagentoAggregation {
  attribute_code = 'select';
  type = MagentoCategoryFilterType.Equal;
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
export class DaffCategoryDriverMagentoAggregationSelectFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(){
    super(MockMagentoAggregationSelect);
  }
}
