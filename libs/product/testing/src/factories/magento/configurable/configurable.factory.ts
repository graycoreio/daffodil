import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoConfigurableProduct } from '@daffodil/product';

import { MockMagentoCoreProduct } from '../core/product.factory';

export class MockMagentoConfigurableProduct extends MockMagentoCoreProduct implements MagentoConfigurableProduct {
  __typename = MagentoProductTypeEnum.ConfigurableProduct;
	configurable_options = [
		{
			attribute_code: 'color',
			attribute_id: faker.random.alphaNumeric(12),
			id: faker.random.alphaNumeric(12),
			label: 'Color',
			position: 0,
			product_id: faker.random.number(1000),
			values: [
				{
					label: 'Blue',
					value_index: 0,
					swatch_data: {
						value: '#0000FF',
						thumbnail: null
					}
				},
				{
					label: 'Yellow',
					value_index: 1,
					swatch_data: {
						value: '#FFFF00',
						thumbnail: null
					}
				},
				{
					label: 'Red',
					value_index: 2,
					swatch_data: {
						value: '#FF0000',
						thumbnail: null
					}
				}
			]
		}
	];
	variants = [
		{
			attributes: [
				{
					code: 'color',
					label: 'Blue',
					value_index: 0
				}
			],
			product: {
				__typename: MagentoProductTypeEnum.SimpleProduct,
				id: faker.random.number(1000),
				url_key: faker.random.alphaNumeric(16),
				name: faker.random.word(),
				sku: faker.random.alphaNumeric(16),
				image: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				thumbnail: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				price_range: {
					__typename: 'PriceRange',
					maximum_price: {
						__typename: 'ProductPrice',
						regular_price: {
							__typename: 'Money',
							value: faker.random.number(1000),
							currency: null
						}
					}
				}
			}
		},
		{
			attributes: [
				{
					code: 'color',
					label: 'Yellow',
					value_index: 1
				}
			],
			product: {
				__typename: MagentoProductTypeEnum.SimpleProduct,
				id: faker.random.number(1000),
				url_key: faker.random.alphaNumeric(16),
				name: faker.random.word(),
				sku: faker.random.alphaNumeric(16),
				image: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				thumbnail: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				price_range: {
					__typename: 'PriceRange',
					maximum_price: {
						__typename: 'ProductPrice',
						regular_price: {
							__typename: 'Money',
							value: faker.random.number(1000),
							currency: null
						}
					}
				}
			}
		},
		{
			attributes: [
				{
					code: 'color',
					label: 'Red',
					value_index: 2
				}
			],
			product: {
				__typename: MagentoProductTypeEnum.SimpleProduct,
				id: faker.random.number(1000),
				url_key: faker.random.alphaNumeric(16),
				name: faker.random.word(),
				sku: faker.random.alphaNumeric(16),
				image: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				thumbnail: {
					__typename: 'ProductImage',
					label: faker.random.words(3),
					url: faker.image.imageUrl()
				},
				price_range: {
					__typename: 'PriceRange',
					maximum_price: {
						__typename: 'ProductPrice',
						regular_price: {
							__typename: 'Money',
							value: faker.random.number(1000),
							currency: null
						}
					}
				}
			}
		}
	];
}

@Injectable({
  providedIn: 'root'
})
export class MagentoConfigurableProductFactory extends DaffModelFactory<MagentoConfigurableProduct> {

  constructor(){
    super(MockMagentoConfigurableProduct);
  }
}
