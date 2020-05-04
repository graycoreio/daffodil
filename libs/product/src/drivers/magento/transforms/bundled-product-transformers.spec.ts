import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductFactory, MagentoBundledProductFactory } from '@daffodil/product/testing';

import { DaffCompositeProduct } from '../../../models/composite-product';
import { MagentoBundledProduct } from '../models/bundled-product';
import { DaffCompositeProductItemInputEnum } from '../../../models/composite-product-item';
import { transformMagentoBundledProduct } from './bundled-product-transformers';

describe('DaffMagentoBundledProductTransformers', () => {
	const mediaUrl = 'media url';
	let mockMagentoSimpleProductTransformerSpy; 
	const daffCompositeProduct: DaffCompositeProduct = new DaffCompositeProductFactory().create();
	let magentoBundledProduct: MagentoBundledProduct;
	daffCompositeProduct.items[0].options[0].id = '1';
	daffCompositeProduct.items[0].options[1].id = '2';

	beforeEach(() => {
		mockMagentoSimpleProductTransformerSpy = jasmine.createSpyObj('DaffMagentoSimpleProductTransformerService', ['transform']);
		mockMagentoSimpleProductTransformerSpy.transform.and.returnValue(daffCompositeProduct);
    TestBed.configureTestingModule({});

		magentoBundledProduct = new MagentoBundledProductFactory().create();
		delete daffCompositeProduct.brand;
		daffCompositeProduct.images = [
			{
				url: magentoBundledProduct.image.url,
				label: magentoBundledProduct.image.label,
				id: '0'
			}
		];

		magentoBundledProduct = {
			...magentoBundledProduct,
			sku: daffCompositeProduct.id,
			url_key: daffCompositeProduct.url,
			description: {
				html: daffCompositeProduct.description,
			},
			price_range: {
				maximum_price: {
					regular_price: {
						value: parseInt(daffCompositeProduct.price, 10), 
						currency: null
					}
				}
			},
			name: daffCompositeProduct.name,
			items: [
				{
					sku: <string>daffCompositeProduct.items[0].id,
					required: daffCompositeProduct.items[0].required,
					title: daffCompositeProduct.items[0].title,
					type: DaffCompositeProductItemInputEnum.select.toString(),
					options: [
						{
							id: parseInt(daffCompositeProduct.items[0].options[0].id, 10),
							label: daffCompositeProduct.items[0].options[0].name,
							price: parseInt(daffCompositeProduct.items[0].options[0].price, 10),
							quantity: daffCompositeProduct.items[0].options[0].quantity
						},
						{
							id: parseInt(daffCompositeProduct.items[0].options[1].id, 10),
							label: daffCompositeProduct.items[0].options[1].name,
							price: parseInt(daffCompositeProduct.items[0].options[1].price, 10),
							quantity: daffCompositeProduct.items[0].options[1].quantity
						}
					]
				}
			]
		}
  });

	describe('transform', () => {
		
		it('should transform a MagentoBundledProduct to a DaffProduct', () => {
			expect(transformMagentoBundledProduct(magentoBundledProduct, mediaUrl)).toEqual(daffCompositeProduct);
		});
	});
});
