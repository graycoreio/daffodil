import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  MagentoAggregation,
  MagentoCategoryFilterType,
} from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoAggregationPrice implements MagentoAggregation {
  attribute_code = 'price';
	type = MagentoCategoryFilterType.Range;
	count = faker.random.number();
	label = 'Price';
	options = [
	  {
	    value: '0-10',
	    count: faker.random.number(),
	    label: '0-10',
	  },
	  {
	    value: '10-20',
	    count: faker.random.number(),
	    label: '10-20',
	  },
	  {
	    value: '20-30',
	    count: faker.random.number(),
	    label: '20-30',
	  },
	  {
	    value: '30-40',
	    count: faker.random.number(),
	    label: '30-40',
	  },
	];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoAggregationPriceFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(){
    super(MockMagentoAggregationPrice);
  }
}
