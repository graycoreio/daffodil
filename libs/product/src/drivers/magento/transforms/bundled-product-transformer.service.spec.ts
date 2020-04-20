import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory, DaffCompositeProductFactory } from '@daffodil/product/testing';

import { DaffMagentoBundledProductTransformerService } from './bundled-product-transformer.service';
import { DaffMagentoSimpleProductTransformerService } from './simple-product-transformer.service';
import { DaffCompositeProduct } from '../../../models/composite-product';
import { MagentoBundledProduct } from '../models/bundled-product';
import { DaffCompositeProductItemInputEnum } from '../../../models/composite-product-item';

describe('DaffMagentoBundledProductTransformerService', () => {
	let service: DaffMagentoBundledProductTransformerService;
	let stubMagentoProduct;
	const mediaUrl = 'media url';
	let mockMagentoSimpleProductTransformerSpy; 
	const daffCompositeProduct: DaffCompositeProduct = new DaffCompositeProductFactory().create();
	const magentoSimpleProduct = new MagentoProductFactory().create();
	let magentoBundledProduct: MagentoBundledProduct;
	daffCompositeProduct.items[0].options[0].id = '1';
	daffCompositeProduct.items[0].options[1].id = '2';

	beforeEach(() => {
		mockMagentoSimpleProductTransformerSpy = jasmine.createSpyObj('DaffMagentoSimpleProductTransformerService', ['transform']);
		mockMagentoSimpleProductTransformerSpy.transform.and.returnValue(daffCompositeProduct);
    TestBed.configureTestingModule({
      providers: [
				DaffMagentoBundledProductTransformerService,
				{ 
					provide: DaffMagentoSimpleProductTransformerService, 
					useValue: mockMagentoSimpleProductTransformerSpy
				}
      ]
    });

		service = TestBed.get(DaffMagentoBundledProductTransformerService);
		stubMagentoProduct = new MagentoProductFactory().create();

		magentoBundledProduct = {
			...magentoSimpleProduct,
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

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('transform', () => {

		it('should call the simpleProductTransformer for the simple product fields', () => {
			service.transform(magentoBundledProduct, mediaUrl);

			expect(mockMagentoSimpleProductTransformerSpy.transform).toHaveBeenCalledWith(magentoBundledProduct, mediaUrl);
		});
		
		it('should transform a MagentoBundledProduct to a DaffProduct', () => {
			expect(service.transform(magentoBundledProduct, mediaUrl)).toEqual(daffCompositeProduct);
		});
	});
});
