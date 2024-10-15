import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { provideDaffProductMagentoExtraProductPreviewTransforms } from '@daffodil/product/driver/magento';
import { MagentoCoreProductFactory } from '@daffodil/product/driver/magento/testing';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';
import { MagentoProductWithUpsellFactory } from '@daffodil/upsell-products/driver/magento/testing';

import { DaffMagentoUpsellProductsTransformers } from './product-response.service';
import { MagentoProductWithUpsell } from '../models/product-with-upsell.interface';

describe('@daffodil/upsell-products/driver/magento | DaffMagentoUpsellProductsTransformers', () => {
  let service: DaffMagentoUpsellProductsTransformers;
  let stubMagentoProduct: MagentoProductWithUpsell;
  let productFactory: DaffProductFactory;
  let magentoProductFactory: MagentoCoreProductFactory;
  let magentoUpsellProductFactory: MagentoProductWithUpsellFactory;
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

    service = TestBed.inject(DaffMagentoUpsellProductsTransformers);
    productFactory = TestBed.inject(DaffProductFactory);
    magentoProductFactory = TestBed.inject(MagentoCoreProductFactory);
    magentoUpsellProductFactory = TestBed.inject(MagentoProductWithUpsellFactory);

    stubMagentoProduct = magentoUpsellProductFactory.create({
      upsell_products: magentoProductFactory.createMany(1),
    });
    mockProduct = productFactory.create();
    mockResponse = {
      id: mockProduct.id,
      products: [mockProduct],
    };
  });

  describe('transformMagentoUpsellProducts', () => {
    let result: DaffProductDriverResponse;

    beforeEach(() => {
      result = service.transformMagentoUpsellProducts(mockResponse, stubMagentoProduct, mediaUrl);
    });

    it('should call the preview transformer', () => {
      expect(previewTransformerSpy).toHaveBeenCalled();
    });

    it('should add upsell products to the main daff product', () => {
      expect((<DaffUpsellProduct>result.products[0]).upsell[0].id).toEqual(stubMagentoProduct.upsell_products[0].sku);
    });

    it('should add upsell products to the response product list', () => {
      expect(result.products[1].id).toEqual(stubMagentoProduct.upsell_products[0].sku);
    });
  });
});
