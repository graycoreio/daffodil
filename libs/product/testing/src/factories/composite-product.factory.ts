import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
	DaffCompositeProduct, 
	DaffPriceTypeEnum,
	DaffCompositeProductItemEnum,
	DaffProductTypeEnum
} from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

import { MockProduct } from './product.factory';

/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct extends MockProduct implements DaffCompositeProduct {
	__typename = DaffProductTypeEnum.Composite;
	items = [{
		id: faker.random.number(10),
		required: faker.random.boolean(),
		title: faker.random.words(2),
		type: DaffCompositeProductItemEnum.select,
		options: [{
			id: faker.random.alphaNumeric(10),
			can_change_quantity: faker.random.boolean,
			name: faker.random.words(2),
			price: faker.random.number(1500).toString(),
			price_type: DaffPriceTypeEnum.fixed,
			quantity: faker.random.number(3)
		}]
	}]
}

/**
 * Factory for creating DaffCompositeProducts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct>{
  constructor(){
    super(MockCompositeProduct);
  }
}