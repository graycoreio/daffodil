import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCompositeProduct, DaffProductTypeEnum, DaffCompositeProductItemInputEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct implements DaffCompositeProduct {
	private stubPrice = faker.random.number(1500);
	private stubDiscount = faker.random.number({min: 0, max: this.stubPrice - 1});
	type = DaffProductTypeEnum.Composite;
	id = faker.random.number(10000).toString();
	url = faker.random.alphaNumeric(16);
	price = this.stubPrice;
	discount = {
		amount: this.stubDiscount,
		percent: this.stubDiscount/this.stubPrice
	};
  name = faker.commerce.productName();
  brand = faker.company.companyName();
	description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.'
	items = [
		{
			id: faker.random.alphaNumeric(10),
			required: faker.random.boolean(),
			title: faker.commerce.productName(),
			input_type: DaffCompositeProductItemInputEnum.select,
			options: [
				{
					id: faker.random.alphaNumeric(10),
					name: faker.commerce.productMaterial(),
					price: faker.random.number(100).toString(),
					quantity: faker.random.number(9),
					is_default: true
				},
				{
					id: faker.random.alphaNumeric(10),
					name: faker.commerce.productMaterial(),
					price: faker.random.number(100).toString(),
					quantity: faker.random.number(9),
					is_default: false
				}
			]
		}
	]
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