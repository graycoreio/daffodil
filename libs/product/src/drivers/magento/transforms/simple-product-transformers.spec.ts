import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory } from '@daffodil/product/testing';

import { MagentoProduct } from '../models/magento-product';
import { DaffProduct, DaffProductTypeEnum, DaffProductStockEnum } from '../../../models/product';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

describe('DaffMagentoSimpleProductTransformerService', () => {
	let stubMagentoProduct: MagentoProduct;
	const mediaUrl = 'media url';
	let expectedDaffProduct: DaffProduct;

	beforeEach(() => {
    TestBed.configureTestingModule({});

		stubMagentoProduct = new MagentoProductFactory().create();

		expectedDaffProduct = {
			type: DaffProductTypeEnum.Simple,
			id: stubMagentoProduct.sku,
			url: stubMagentoProduct.url_key,
			name: stubMagentoProduct.name,
			price: stubMagentoProduct.price_range.maximum_price.regular_price.value,
			discount: {
				amount: stubMagentoProduct.price_range.maximum_price.discount.amount_off,
				percent: stubMagentoProduct.price_range.maximum_price.discount.percent_off
			},
      images: [
        { url: stubMagentoProduct.image.url, id: '0', label: stubMagentoProduct.image.label},
      ],
			description: stubMagentoProduct.description.html,
			stock_status: DaffProductStockEnum.InStock
		}
  });

	describe('transformMagentoSimpleProduct', () => {
		
		it('should transform a MagentoProduct to a DaffProduct', () => {
			expect(transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl)).toEqual(expectedDaffProduct);
		});
	});
});
