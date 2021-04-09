import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoAggregationSelect implements MagentoAggregation {
  attribute_code = 'select';
	type?: 'select';
	count? = faker.random.number();
	label? = faker.random.word();
	options =  [
	  {
	    count: faker.random.number(),
	    label: faker.random.word(),
	    value: faker.random.uuid(),
	  },
	  {
	    count: faker.random.number(),
	    label: faker.random.word(),
	    value: faker.random.uuid(),
	  },
	  {
	    count: faker.random.number(),
	    label: faker.random.word(),
	    value: faker.random.uuid(),
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
