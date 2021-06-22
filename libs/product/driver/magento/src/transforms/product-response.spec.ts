import { TestBed } from '@angular/core/testing';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { transformMagentoProductResponse } from './product-response';

describe('@daffodil/product/driver/magento | transformMagentoProductResponse', () => {
  let stubMagentoProduct: MagentoProduct;
  const mediaUrl = 'media url';
  let result: DaffProductDriverResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    stubMagentoProduct = new MagentoProductFactory().create({
      related_products: [
        new MagentoProductFactory().create(),
      ],
      upsell_products: [
        new MagentoProductFactory().create(),
      ],
    });

    result = transformMagentoProductResponse(stubMagentoProduct, mediaUrl);
  });

  it('should set the ID to the main product ID', () => {
    expect(result.id).toEqual(stubMagentoProduct.sku);
  });

  it('should add the transformed product to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.sku }));
  });

  it('should add the upsell products to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.upsell_products[0].sku }));
  });

  it('should add the related products to the products array', () => {
    expect(result.products).toContain(jasmine.objectContaining({ id: stubMagentoProduct.related_products[0].sku }));
  });
});
