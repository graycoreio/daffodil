import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCompositeProduct,
  DaffProductTypeEnum,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product';

import { MockProduct } from './product.factory';

/**
 * Mocked DaffCompositeProduct object.
 *
 * @deprecated import from @daffodil/composite-product/testing instead.
 */
export class MockCompositeProduct extends MockProduct implements DaffCompositeProduct {
	type = DaffProductTypeEnum.Composite;
	items = [
	  {
	    id: faker.datatype.uuid(),
	    url: `/${faker.random.word()}.html`,
	    required: faker.datatype.boolean(),
	    title: faker.commerce.productName(),
	    input_type: DaffCompositeProductItemInputEnum.select,
	    options: [
	      {
	        id: faker.datatype.uuid(),
	        type: DaffProductTypeEnum.Simple,
	        url: `/${faker.random.word()}.html`,
	        name: faker.commerce.productMaterial(),
	        price: faker.datatype.number({ min: 1, max: 100 }),
	        images: [],
	        thumbnail: null,
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.datatype.number({ min: 1, max: 9 }),
	        is_default: true,
	        in_stock: true,
	        related: [],
	        upsell: [],
	      },
	      {
	        id: faker.datatype.uuid(),
	        type: DaffProductTypeEnum.Simple,
	        url: `/${faker.random.word()}.html`,
	        name: faker.commerce.productMaterial(),
	        price: faker.datatype.number({ min: 1, max: 100 }),
	        images: [],
	        thumbnail: null,
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.datatype.number({ min: 1, max: 9 }),
	        is_default: false,
	        in_stock: true,
	        related: [],
	        upsell: [],
	      },
	    ],
	  },
	  {
	    id: faker.datatype.uuid(),
	    url: `/${faker.random.word()}.html`,
	    required: faker.datatype.boolean(),
	    title: faker.commerce.productName(),
	    input_type: DaffCompositeProductItemInputEnum.select,
	    options: [
	      {
	        id: faker.datatype.uuid(),
	        type: DaffProductTypeEnum.Simple,
	        url: `/${faker.random.word()}.html`,
	        name: faker.commerce.productMaterial(),
	        price: faker.datatype.number({ min: 1, max: 100 }),
	        images: [],
	        thumbnail: null,
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.datatype.number({ min: 1, max: 9 }),
	        is_default: true,
	        in_stock: true,
	        related: [],
	        upsell: [],
	      },
	      {
	        id: faker.datatype.uuid(),
	        type: DaffProductTypeEnum.Simple,
	        url: `/${faker.random.word()}.html`,
	        name: faker.commerce.productMaterial(),
	        price: faker.datatype.number({ min: 1, max: 100 }),
	        images: [],
	        thumbnail: null,
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.datatype.number({ min: 1, max: 9 }),
	        is_default: false,
	        in_stock: true,
	        related: [],
	        upsell: [],
	      },
	    ],
	  },
	];
}

/**
 * Factory for creating DaffCompositeProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct>{
  constructor(){
    super(MockCompositeProduct);
  }
}
