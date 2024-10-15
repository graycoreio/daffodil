import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { provideDaffProductMagentoExtraProductPreviewTransforms } from '@daffodil/product/driver/magento';
import { MagentoCoreProductFactory } from '@daffodil/product/driver/magento/testing';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import { MagentoProductWithRelatedFactory } from '@daffodil/related-products/driver/magento/testing';

import { DaffMagentoRelatedProductsTransformers } from './product-response.service';
import { MagentoProductWithRelated } from '../models/product-with-related.interface';

describe('@daffodil/related-products/driver/magento | DaffMagentoRelatedProductsTransformers', () => {
  let service: DaffMagentoRelatedProductsTransformers;
  let stubMagentoProduct: MagentoProductWithRelated;
  let productFactory: DaffProductFactory;
  let magentoProductFactory: MagentoCoreProductFactory;
  let magentoRelatedProductFactory: MagentoProductWithRelatedFactory;
  const mediaUrl = 'media url';
  let mockProduct: DaffProduct;
  let mockResponse: DaffProductDriverResponse;
  let previewTransformerSpy: jasmine.Spy;

  beforeEach(() => {
    previewTransformerSpy = jasmine.createSpy();
    previewTransformerSpy.and.callFake(product => product);

    TestBed.configureTestingModule({
      providers: [
        provideDaffProductMagentoExtraProductPreviewTransforms(
          previewTransformerSpy,
        ),
      ],
    });

    service = TestBed.inject(DaffMagentoRelatedProductsTransformers);
    productFactory = TestBed.inject(DaffProductFactory);
    magentoProductFactory = TestBed.inject(MagentoCoreProductFactory);
    magentoRelatedProductFactory = TestBed.inject(MagentoProductWithRelatedFactory);

    stubMagentoProduct = magentoRelatedProductFactory.create({
      related_products: magentoProductFactory.createMany(1),
    });
    mockProduct = productFactory.create();
    mockResponse = {
      id: mockProduct.id,
      products: [mockProduct],
    };
  });

  describe('transformMagentoRelatedProducts', () => {
    let result: DaffProductDriverResponse;

    beforeEach(() => {
      result = service.transformMagentoRelatedProducts(mockResponse, stubMagentoProduct, mediaUrl);
    });

    it('should call the preview transformer', () => {
      expect(previewTransformerSpy).toHaveBeenCalled();
    });

    it('should add related products to the main daff product', () => {
      expect((<DaffRelatedProduct>result.products[0]).related[0].id).toEqual(stubMagentoProduct.related_products[0].sku);
    });

    it('should add related products to the response product list', () => {
      expect(result.products[1].id).toEqual(stubMagentoProduct.related_products[0].sku);
    });
  });
});
