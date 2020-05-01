import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory, DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoProductTransformerService } from './product-transformer.service';
import { DaffMagentoSimpleProductTransformerService } from './simple-product-transformer.service';
import { DaffMagentoBundledProductTransformerService } from './bundled-product-transformer.service';
import { MagentoProduct, MagentoProductTypeEnum } from '../models/magento-product';

describe('DaffMagentoProductTransformerService', () => {
	let service: DaffMagentoProductTransformerService;
	let mockMagentoSimpleProductTransformerSpy; 
	let mockMagentoBundledProductTransformerSpy;
	let stubMagentoProducts: MagentoProduct[];
	const mediaUrl = 'media url';
	const daffProduct = new DaffProductFactory().create();

	beforeEach(() => {
		mockMagentoSimpleProductTransformerSpy = jasmine.createSpyObj('DaffMagentoSimpleProductTransformerService', ['transform']);
		mockMagentoSimpleProductTransformerSpy.transform.and.returnValue(daffProduct);
		mockMagentoBundledProductTransformerSpy = jasmine.createSpyObj('DaffMagentoBundledProductTransformerService', ['transform']);
		mockMagentoBundledProductTransformerSpy.transform.and.returnValue(daffProduct);
    TestBed.configureTestingModule({
      providers: [
				DaffMagentoProductTransformerService,
				{ 
					provide: DaffMagentoSimpleProductTransformerService, 
					useValue: mockMagentoSimpleProductTransformerSpy
				},
				{
					provide: DaffMagentoBundledProductTransformerService,
					useValue: mockMagentoBundledProductTransformerSpy
				}
      ]
    });

		service = TestBed.get(DaffMagentoProductTransformerService);
		stubMagentoProducts = new MagentoProductFactory().createMany(2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('transform', () => {
		
		describe('when the product is a simple product', () => {

			beforeEach(() => {
				stubMagentoProducts[0].__typename = MagentoProductTypeEnum.SimpleProduct;
			});
			
			it('should call the simple product transformer', () => {
				service.transform(stubMagentoProducts[0], mediaUrl);

				expect(mockMagentoSimpleProductTransformerSpy.transform).toHaveBeenCalledWith(stubMagentoProducts[0], mediaUrl);
			});

			it('should return the value from the simple product transformer', () => {
				expect(service.transform(stubMagentoProducts[0], mediaUrl)).toEqual(daffProduct);
			});
		});

		describe('when the product is a bundled product', () => {

			beforeEach(() => {
				stubMagentoProducts[0].__typename = MagentoProductTypeEnum.BundledProduct;
			});
			
			it('should call the bundled product transformer', () => {
				service.transform(stubMagentoProducts[0], mediaUrl);

				expect(mockMagentoBundledProductTransformerSpy.transform).toHaveBeenCalledWith(stubMagentoProducts[0], mediaUrl);
			});

			it('should return the value from the simple product transformer', () => {
				expect(service.transform(stubMagentoProducts[0], mediaUrl)).toEqual(daffProduct);
			});
		});
	});
	
	describe('transformMany', () => {
		
		it('should call transform many times', () => {
			spyOn(service, 'transform');

			service.transformMany(stubMagentoProducts, mediaUrl);

			expect(service.transform).toHaveBeenCalledTimes(stubMagentoProducts.length);
		});
	});
});
