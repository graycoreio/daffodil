import { TestBed } from '@angular/core/testing';

import {
  DaffProduct,
  DaffProductCustomAttributeKind,
  DaffProductTypeEnum,
} from '@daffodil/product';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoSimpleProductTransformers } from './simple-product-transformers';

describe('DaffMagentoSimpleProductTransformerService', () => {
  let stubMagentoProduct: MagentoProduct;
  const mediaUrl = 'media url';
  let service: DaffMagentoSimpleProductTransformers;
  let productFactory: MagentoProductFactory;

  beforeEach(() => {
    productFactory = TestBed.inject(MagentoProductFactory);
    service = TestBed.inject(DaffMagentoSimpleProductTransformers);

    stubMagentoProduct = productFactory.create({
      custom_attributesV2: {
        items: [{
          __typename: 'AttributeValue',
          code: 'code',
          value: 'value',
        }],
        errors: [],
      },
    });
  });

  describe('transformMagentoSimpleProduct', () => {
    let result: DaffProduct;

    beforeEach(() => {
      result = service.transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl);
    });

    it('should set the type', () => {
      expect(result.type).toEqual(DaffProductTypeEnum.Simple);
    });

    it('should set the id', () => {
      expect(result.id).toEqual(stubMagentoProduct.sku);
    });

    it('should set the url', () => {
      expect(result.url).toEqual(`/${stubMagentoProduct.url_key}${stubMagentoProduct.url_suffix}`);
    });

    it('should set the canonicalUrl', () => {
      expect(result.canonicalUrl).toEqual(stubMagentoProduct.canonical_url);
    });

    it('should set the name', () => {
      expect(result.name).toEqual(stubMagentoProduct.name);
    });

    it('should set the price', () => {
      expect(result.price).toEqual(stubMagentoProduct.price_range.maximum_price.regular_price.value);
    });

    it('should set the discount', () => {
      expect(result.discount).toEqual({
        amount: stubMagentoProduct.price_range.maximum_price.discount.amount_off,
        percent: stubMagentoProduct.price_range.maximum_price.discount.percent_off,
      });
    });

    it('should set the images', () => {
      expect(result.images).toEqual([]);
    });

    it('should set the thumbnail', () => {
      expect(result.thumbnail).toEqual({
        url: stubMagentoProduct.image.url,
        label: stubMagentoProduct.image.label,
        id: null,
      });
    });

    it('should set the description', () => {
      expect(result.description).toEqual(stubMagentoProduct.description?.html);
    });

    it('should set the short_description', () => {
      expect(result.short_description).toEqual(stubMagentoProduct.short_description?.html);
    });

    it('should set the meta_title', () => {
      expect(result.meta_title).toEqual(stubMagentoProduct.meta_title);
    });

    it('should set the meta_description', () => {
      expect(result.meta_description).toEqual(stubMagentoProduct.meta_description);
    });

    it('should set in_stock', () => {
      expect(result.in_stock).toEqual(true);
    });

    it('should set the customAttributes', () => {
      expect(result.customAttributes).toEqual([{
        id: 'code',
        kind: DaffProductCustomAttributeKind.SCALAR,
        value: 'value',
      }]);
    });
  });

  describe('when some of the fields are missing', () => {
    beforeEach(() => {
      stubMagentoProduct.media_gallery_entries = undefined;
      stubMagentoProduct.meta_description = undefined;
    });

    it('should not set those fields on the result', () => {
      const result = service.transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl);
      expect(result.images).toBeUndefined();
      expect(result.meta_description).toBeUndefined();
    });
  });
});
