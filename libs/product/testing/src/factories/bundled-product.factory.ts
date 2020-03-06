import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
	DaffBundledProduct, 
	DaffBundledProductPriceViewEnum,
	DaffPriceTypeEnum,
	DaffBundledProductItemType,
	DaffProductTypeEnum
} from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

import { MockProduct } from './product.factory';

/**
 * Mocked DaffBundledProduct object.
 */
export class MockBundledProduct extends MockProduct implements DaffBundledProduct {
	__typename = DaffProductTypeEnum.Composite;
	price_view = DaffBundledProductPriceViewEnum.as_low_as;
	items = [{
		bundle_id: faker.random.alphaNumeric(10),
		bundle_option_id: faker.random.number(10),
		required: faker.random.boolean(),
		title: faker.random.words(2),
		type: DaffBundledProductItemType.select,
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
 * Factory for creating DaffBundledProducts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffBundledProductFactory extends DaffModelFactory<DaffBundledProduct>{
  constructor(){
    super(MockBundledProduct);
  }
}