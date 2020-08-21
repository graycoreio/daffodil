import { TestBed } from '@angular/core/testing';

import { transformMagentoBundledProduct } from './bundled-product-transformers';
import daffCompositeProductData from './spec-data/daff-composite-product.json';
import magentoBundledProductData from './spec-data/magento-bundled-product.json';
import { MagentoProductStockStatusEnum } from '../models/magento-product';

describe('DaffMagentoBundledProductTransformers', () => {
	const mediaUrl = 'media url';

	beforeEach(() => {
    TestBed.configureTestingModule({});
  });

	describe('transform', () => {
		const magentoBundledProduct = {
			...magentoBundledProductData,
			stock_status: MagentoProductStockStatusEnum.InStock
		}
		
		it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
			expect(transformMagentoBundledProduct(magentoBundledProduct, mediaUrl)).toEqual(jasmine.objectContaining(daffCompositeProductData));
		});
	});
});
