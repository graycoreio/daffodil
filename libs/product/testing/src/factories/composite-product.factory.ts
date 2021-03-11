import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCompositeProduct,
  DaffProductTypeEnum,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product';

/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct implements DaffCompositeProduct {
  private stubPrice = faker.random.number({ min: 1, max: 1500 });
  private stubDiscount = faker.random.number({ min: 0, max: this.stubPrice - 1 });
  type = DaffProductTypeEnum.Composite;
  id = faker.random.uuid();
  url = faker.random.alphaNumeric(16);
  price = this.stubPrice;
  images = [];
  discount = {
	  amount: this.stubDiscount,
	  percent: this.stubDiscount/this.stubPrice,
  };
  in_stock = true;
  name = faker.commerce.productName();
  brand = faker.company.companyName();
  description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
  items = [
	  {
	    id: faker.random.uuid(),
	    required: faker.random.boolean(),
	    title: faker.commerce.productName(),
	    input_type: DaffCompositeProductItemInputEnum.select,
	    options: [
	      {
	        id: faker.random.uuid(),
	        name: faker.commerce.productMaterial(),
	        price: faker.random.number({ min: 1, max: 100 }),
	        images: [],
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.random.number({ min: 1, max: 9 }),
	        is_default: true,
	        in_stock: true,
	      },
	      {
	        id: faker.random.uuid(),
	        name: faker.commerce.productMaterial(),
	        price: faker.random.number({ min: 1, max: 100 }),
	        images: [],
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.random.number({ min: 1, max: 9 }),
	        is_default: false,
	        in_stock: true,
	      },
	    ],
	  },
	  {
	    id: faker.random.uuid(),
	    required: faker.random.boolean(),
	    title: faker.commerce.productName(),
	    input_type: DaffCompositeProductItemInputEnum.select,
	    options: [
	      {
	        id: faker.random.uuid(),
	        name: faker.commerce.productMaterial(),
	        price: faker.random.number({ min: 1, max: 100 }),
	        images: [],
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.random.number({ min: 1, max: 9 }),
	        is_default: true,
	        in_stock: true,
	      },
	      {
	        id: faker.random.uuid(),
	        name: faker.commerce.productMaterial(),
	        price: faker.random.number({ min: 1, max: 100 }),
	        images: [],
	        discount: {
	          amount: 0,
	          percent: 0,
	        },
	        quantity: faker.random.number({ min: 1, max: 9 }),
	        is_default: false,
	        in_stock: true,
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
