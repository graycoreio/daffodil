import { TestBed } from '@angular/core/testing';

import { DaffConfigurableProductFactory, MagentoConfigurableProductFactory, DaffProductImageFactory } from '@daffodil/product/testing';

import { DaffConfigurableProduct } from '../../../models/configurable-product';
import { MagentoConfigurableProduct } from '../models/configurable-product';
import { transformMagentoConfigurableProduct } from './configurable-product-transformers';

describe('DaffMagentoConfigurableProductTransformers', () => {
	const mediaUrl = 'media url';
	let mockMagentoSimpleProductTransformerSpy; 
	const daffConfigurableProduct: DaffConfigurableProduct = new DaffConfigurableProductFactory().create();
	let magentoConfigurableProduct: MagentoConfigurableProduct;
	daffConfigurableProduct.variants[0].image = new DaffProductImageFactory().create();
	daffConfigurableProduct.variants[1].image = new DaffProductImageFactory().create();
	daffConfigurableProduct.variants[2].image = new DaffProductImageFactory().create();
	daffConfigurableProduct.configurableAttributes[0].values[0].swatch.thumbnail = null;
	daffConfigurableProduct.configurableAttributes[0].values[1].swatch.thumbnail = null;
	daffConfigurableProduct.configurableAttributes[0].values[2].swatch.thumbnail = null;
	daffConfigurableProduct.variants[0].image.id = '0';
	daffConfigurableProduct.variants[1].image.id = '0';
	daffConfigurableProduct.variants[2].image.id = '0';

	beforeEach(() => {
		mockMagentoSimpleProductTransformerSpy = jasmine.createSpyObj('DaffMagentoSimpleProductTransformerService', ['transform']);
		mockMagentoSimpleProductTransformerSpy.transform.and.returnValue(daffConfigurableProduct);
    TestBed.configureTestingModule({});

		magentoConfigurableProduct = new MagentoConfigurableProductFactory().create();
		delete daffConfigurableProduct.brand;
		daffConfigurableProduct.images = [
			{
				url: magentoConfigurableProduct.image.url,
				label: magentoConfigurableProduct.image.label,
				id: '0'
			}
		];

		magentoConfigurableProduct = {
			...magentoConfigurableProduct,
			sku: daffConfigurableProduct.id,
			url_key: daffConfigurableProduct.url,
			description: {
				html: daffConfigurableProduct.description,
			},
			price_range: {
				maximum_price: {
					regular_price: {
						value: parseInt(daffConfigurableProduct.price, 10), 
						currency: null
					}
				}
			},
			name: daffConfigurableProduct.name,
			configurable_options: [
				{
					...magentoConfigurableProduct.configurable_options[0],
					position: daffConfigurableProduct.configurableAttributes[0].order,
					attribute_code: daffConfigurableProduct.configurableAttributes[0].code,
					label: daffConfigurableProduct.configurableAttributes[0].label,
					values: [
						{
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10),
							label: daffConfigurableProduct.configurableAttributes[0].values[0].label,
							swatch_data: {
								value: daffConfigurableProduct.configurableAttributes[0].values[0].swatch.value,
								thumbnail: null
							}
						},
						{
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[1].value, 10),
							label: daffConfigurableProduct.configurableAttributes[0].values[1].label,
							swatch_data: {
								value: daffConfigurableProduct.configurableAttributes[0].values[1].swatch.value,
								thumbnail: null
							}
						},
						{
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[2].value, 10),
							label: daffConfigurableProduct.configurableAttributes[0].values[2].label,
							swatch_data: {
								value: daffConfigurableProduct.configurableAttributes[0].values[2].swatch.value,
								thumbnail: null
							}
						}
					]
				}
			],
			variants: [
				{
					attributes: [
						{
							code: daffConfigurableProduct.configurableAttributes[0].code,
							label: daffConfigurableProduct.configurableAttributes[0].label,
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10)
						}
					],
					product: {
						...magentoConfigurableProduct,
						image: {
							url: daffConfigurableProduct.variants[0].image.url,
							label: daffConfigurableProduct.variants[0].image.label
						},
						price_range: {
							maximum_price: {
								regular_price: {
									value: parseInt(daffConfigurableProduct.variants[0].price, 10),
									currency: null
								}
							}
						},
						sku: daffConfigurableProduct.variants[0].id
					}
				},
				{
					attributes: [
						{
							code: daffConfigurableProduct.configurableAttributes[0].code,
							label: daffConfigurableProduct.configurableAttributes[0].label,
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[1].value, 10)
						}
					],
					product: {
						...magentoConfigurableProduct,
						image: {
							url: daffConfigurableProduct.variants[1].image.url,
							label: daffConfigurableProduct.variants[1].image.label
						},
						price_range: {
							maximum_price: {
								regular_price: {
									value: parseInt(daffConfigurableProduct.variants[1].price, 10),
									currency: null
								}
							}
						},
						sku: daffConfigurableProduct.variants[1].id
					}
				},
				{
					attributes: [
						{
							code: daffConfigurableProduct.configurableAttributes[0].code,
							label: daffConfigurableProduct.configurableAttributes[0].label,
							value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[2].value, 10)
						}
					],
					product: {
						...magentoConfigurableProduct,
						image: {
							url: daffConfigurableProduct.variants[2].image.url,
							label: daffConfigurableProduct.variants[2].image.label
						},
						price_range: {
							maximum_price: {
								regular_price: {
									value: parseInt(daffConfigurableProduct.variants[2].price, 10),
									currency: null
								}
							}
						},
						sku: daffConfigurableProduct.variants[2].id
					}
				}
			]
		}
  });

	describe('transform', () => {
		
		it('should transform a MagentoConfigurableProduct to a DaffConfigurableProduct', () => {
			expect(transformMagentoConfigurableProduct(magentoConfigurableProduct, mediaUrl)).toEqual(daffConfigurableProduct);
		});
	});
});
