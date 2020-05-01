import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory, MagentoBundledProductFactory } from '@daffodil/product/testing';

import { MagentoProduct } from '../models/magento-product';
import { DaffProductTypeEnum, MagentoBundledProduct } from '@daffodil/product';
import { transformMagentoProduct, transformManyMagentoProducts } from './product-transformers';

describe('DaffMagentoProductTransformers', () => {
	const mediaUrl = 'media url';
	let stubMagentoProducts: MagentoProduct[];

	beforeEach(() => {
		TestBed.configureTestingModule({});
		stubMagentoProducts = new MagentoProductFactory().createMany(2);
  });

	describe('transformMagentoProduct', () => {
		
		describe('when the product is a simple product', () => {

			it('should return a simple product', () => {
				expect(transformMagentoProduct(stubMagentoProducts[0], mediaUrl).type).toEqual(DaffProductTypeEnum.Simple);
			});
		});

		describe('when the product is a bundled product', () => {
			let magentoBundledProduct: MagentoBundledProduct;

			beforeEach(() => {
				magentoBundledProduct = new MagentoBundledProductFactory().create();
			});

			it('should return a composite product', () => {
				expect(transformMagentoProduct(magentoBundledProduct, mediaUrl).type).toEqual(DaffProductTypeEnum.Composite);
			});
		});
	});
	
	describe('transformMany', () => {
		
		it('should transform many products', () => {
			expect(transformManyMagentoProducts(stubMagentoProducts, mediaUrl).length).toEqual(2);
		});
	});
});
