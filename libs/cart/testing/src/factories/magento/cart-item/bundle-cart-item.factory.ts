import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum, MagentoBundleCartItem } from '@daffodil/cart';
import { MockMagentoCartItem } from './cart-item.factory';

export class MockMagentoBundleCartItem extends MockMagentoCartItem implements MagentoBundleCartItem {
  __typename = MagentoCartItemTypeEnum.Bundle;
  bundle_options = [
		{
			id: faker.random.number({min: 1, max: 1000}),
			type: 'radio',
			label: faker.random.word(),
			price: faker.random.number({min: 1, max: 99}),
			quantity: 1,
			values: [{
				id: faker.random.number({min:1, max: 1000}),
				label: faker.random.word(),
				price: faker.random.number({min: 1, max: 99}),
				quantity: 1
			}]
		}
	];
}

@Injectable({
  providedIn: 'root'
})
export class MagentoBundleCartItemFactory extends DaffModelFactory<MagentoBundleCartItem> {

  constructor(){
    super(MockMagentoBundleCartItem);
  }
}
