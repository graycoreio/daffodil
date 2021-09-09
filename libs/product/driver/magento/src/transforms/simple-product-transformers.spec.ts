import { TestBed } from '@angular/core/testing';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoSimpleProductTransformers } from './simple-product-transformers';

describe('DaffMagentoSimpleProductTransformerService', () => {
  let stubMagentoProduct: MagentoProduct;
  const mediaUrl = 'media url';
  let expectedDaffProduct: DaffProduct;
  let service: DaffMagentoSimpleProductTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaffMagentoSimpleProductTransformers);

    stubMagentoProduct = new MagentoProductFactory().create();

    expectedDaffProduct = {
      type: DaffProductTypeEnum.Simple,
      id: stubMagentoProduct.sku,
      url: `/${stubMagentoProduct.url_key}${stubMagentoProduct.url_suffix}`,
      canonicalUrl: stubMagentoProduct.canonical_url,
      name: stubMagentoProduct.name,
      price: stubMagentoProduct.price_range.maximum_price.regular_price.value,
      discount: {
        amount: stubMagentoProduct.price_range.maximum_price.discount.amount_off,
        percent: stubMagentoProduct.price_range.maximum_price.discount.percent_off,
      },
      images: [],
      thumbnail: {
        url: stubMagentoProduct.thumbnail.url,
        label: stubMagentoProduct.thumbnail.label,
        id: null,
      },
      description: stubMagentoProduct.description.html,
      short_description: stubMagentoProduct.short_description.html,
      meta_title: stubMagentoProduct.meta_title,
      meta_description: stubMagentoProduct.meta_description,
      in_stock: true,
      upsell: [],
    };
  });

  describe('transformMagentoSimpleProduct', () => {

    it('should transform a MagentoProduct to a DaffProduct', () => {
      expect(service.transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl)).toEqual(expectedDaffProduct);
    });
  });
});
