import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffConfigurableProduct, DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffConfigurableProduct object.
 */
export class MockConfigurableProduct implements DaffConfigurableProduct {
	private stubPriceVariant1 = faker.random.number(1500);
	private stubDiscountVariant1 = faker.random.number({min: 0, max: this.stubPriceVariant1 - 1});
	private stubPriceVariant2 = faker.random.number(1500);
	private stubDiscountVariant2 = faker.random.number({min: 0, max: this.stubPriceVariant2 - 1});
	private stubPriceVariant3 = faker.random.number(1500);
	private stubDiscountVariant3 = faker.random.number({min: 0, max: this.stubPriceVariant3 - 1});

	type = DaffProductTypeEnum.Configurable;
	id = faker.random.number(10000).toString();
	url = faker.random.alphaNumeric(16);
  price = faker.random.number(1500);
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
						thumbnail: null
					}
				},
				{
					value: '1',
					label: 'Yellow',
					swatch: {
						value: '#FFFF00',
						thumbnail: null
					}
				},
				{
					value: '2',
					label: 'Red',
					swatch: {
						value: '#FF0000',
						thumbnail: null
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
			price: this.stubPriceVariant1,
			discount: {
				amount: this.stubDiscountVariant1,
				percent: this.stubDiscountVariant1/this.stubPriceVariant1
			},
			id: faker.random.alphaNumeric(16)
		},
		{
			appliedAttributes: {
				color: '1'
			},
			price: this.stubPriceVariant2,
			discount: {
				amount: this.stubDiscountVariant2,
				percent: this.stubDiscountVariant2/this.stubPriceVariant2
			},
			id: faker.random.alphaNumeric(16)
		},
		{
			appliedAttributes: {
				color: '2'
			},
			price: this.stubPriceVariant3,
			discount: {
				amount: this.stubDiscountVariant3,
				percent: this.stubDiscountVariant3/this.stubPriceVariant3
			},
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