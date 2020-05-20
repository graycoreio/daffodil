import { TestBed } from '@angular/core/testing';

import { transformMagentoBundledProduct } from './bundled-product-transformers';
import daffCompositeProductData from './spec-data/daff-composite-product.json';
import magentoBundledProductData from './spec-data/magento-bundled-product.json';

describe('DaffMagentoBundledProductTransformers', () => {
	const mediaUrl = 'media url';

	beforeEach(() => {
    TestBed.configureTestingModule({});
  });

	describe('transform', () => {
		
		it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
			expect(transformMagentoBundledProduct(magentoBundledProductData, mediaUrl)).toEqual(daffCompositeProductData);
		});
	});
});
