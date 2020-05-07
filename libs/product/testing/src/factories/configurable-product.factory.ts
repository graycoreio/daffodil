import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffConfigurableProduct, DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffConfigurableProduct object.
 */
export class MockConfigurableProduct implements DaffConfigurableProduct {
	type = DaffProductTypeEnum.Configurable;
	id = faker.random.number(10000).toString();
	url = faker.random.alphaNumeric(16);
  price = faker.random.number(1500).toString();
  name = faker.commerce.productName();
  brand = faker.company.companyName();
	description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.'
	configurableAttributes = [
		{
			code: 'color',
			label: 'Color',
			order: 0,
			values: [
				{
					value: '0',
					label: 'Blue',
					swatch: {
						value: '#0000FF',
					}
				},
				{
					value: '1',
					label: 'Yellow',
					swatch: {
						value: '#FFFF00'
					}
				},
				{
					value: '2',
					label: 'Red',
					swatch: {
						value: '#FF0000'
					}
				}
			]
		}
	];
	variants = [
		{
			appliedAttributes: {
				color: '0'
			},
			price: faker.random.number(1500).toString(),
			id: faker.random.alphaNumeric(16)
		},
		{
			appliedAttributes: {
				color: '1'
			},
			price: faker.random.number(1500).toString(),
			id: faker.random.alphaNumeric(16)
		},
		{
			appliedAttributes: {
				color: '2'
			},
			price: faker.random.number(1500).toString(),
			id: faker.random.alphaNumeric(16)
		}
	]
}

/**
 * Factory for creating DaffConfigurableProducts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffConfigurableProductFactory extends DaffModelFactory<DaffConfigurableProduct>{
  constructor(){
    super(MockConfigurableProduct);
  }
}