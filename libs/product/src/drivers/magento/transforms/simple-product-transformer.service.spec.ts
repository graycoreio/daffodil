import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory } from '@daffodil/product/testing';

import { DaffMagentoSimpleProductTransformerService } from './simple-product-transformer.service';
import { MagentoProduct } from '../models/magento-product';
import { DaffProduct, DaffProductTypeEnum } from '../../../models/product';

describe('DaffMagentoSimpleProductTransformerService', () => {
	let service: DaffMagentoSimpleProductTransformerService;
	let stubMagentoProduct: MagentoProduct;
	const mediaUrl = 'media url';
	let expectedDaffProduct: DaffProduct

	beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffMagentoSimpleProductTransformerService
      ]
    });

		service = TestBed.get(DaffMagentoSimpleProductTransformerService);
		stubMagentoProduct = new MagentoProductFactory().create();

		expectedDaffProduct = {
			type: DaffProductTypeEnum.Simple,
			id: stubMagentoProduct.sku,
			url: stubMagentoProduct.url_key,
			name: stubMagentoProduct.name,
			price: stubMagentoProduct.price_range.maximum_price.regular_price.value.toString(),
      images: [
        { url: stubMagentoProduct.image.url, id: '0', label: stubMagentoProduct.image.label},
      ],
      description: stubMagentoProduct.description.html
		}
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('transform', () => {
		
		it('should transform a MagentoProduct to a DaffProduct', () => {
			expect(service.transform(stubMagentoProduct, mediaUrl)).toEqual(expectedDaffProduct);
		});
	});
});
