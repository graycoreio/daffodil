import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCompositeCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffMockCartItem } from './cart-item.factory';

export class DaffMockCompositeCartItem extends DaffMockCartItem implements DaffCompositeCartItem {
	type = DaffCartItemInputType.Composite;
	options = [
	  {
	    option_id: faker.random.number(1000).toString(),
	    option_label: faker.random.word(),
	    value_label: faker.random.word(),
	  },
	  {
	    option_id: faker.random.number(1000).toString(),
	    option_label: faker.random.word(),
	    value_label: faker.random.word(),
	  },
	];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCompositeCartItemFactory extends DaffModelFactory<DaffCompositeCartItem> {

  constructor(){
    super(DaffMockCompositeCartItem);
  }
}
