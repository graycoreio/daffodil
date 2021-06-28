import { TestBed } from '@angular/core/testing';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import { MagentoConfigurableProduct } from '@daffodil/product/driver/magento';
import { MagentoBundledProduct } from '@daffodil/product/driver/magento';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import {
  MagentoBundledProductFactory,
  MagentoConfigurableProductFactory,
  MagentoProductFactory,
} from '@daffodil/product/driver/magento/testing';

import { transformMagentoSimpleProduct } from './simple-product-transformers';

describe('DaffMagentoSimpleProductTransformerService', () => {
  let stubMagentoProduct: MagentoProduct;
  let bundleProductFactory: MagentoBundledProductFactory;
  let configurableProductFactory: MagentoConfigurableProductFactory;
  const mediaUrl = 'media url';
  let expectedDaffProduct: DaffProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    bundleProductFactory = TestBed.inject(MagentoBundledProductFactory);
    configurableProductFactory = TestBed.inject(MagentoConfigurableProductFactory);

    stubMagentoProduct = new MagentoProductFactory().create();

    expectedDaffProduct = {
      type: DaffProductTypeEnum.Simple,
      id: stubMagentoProduct.sku,
      url: `/${stubMagentoProduct.url_key}${stubMagentoProduct.url_suffix}`,
      name: stubMagentoProduct.name,
      price: stubMagentoProduct.price_range.maximum_price.regular_price.value,
      discount: {
        amount: stubMagentoProduct.price_range.maximum_price.discount.amount_off,
        percent: stubMagentoProduct.price_range.maximum_price.discount.percent_off,
      },
      images: [],
      thumbnail: {
        url: `${mediaUrl}catalog/product${stubMagentoProduct.thumbnail.url}`,
        label: stubMagentoProduct.thumbnail.label,
        id: null,
      },
      description: stubMagentoProduct.description.html,
      short_description: stubMagentoProduct.short_description.html,
      meta_title: stubMagentoProduct.meta_title,
      meta_description: stubMagentoProduct.meta_description,
      in_stock: true,
      upsell: [],
      related: [],
    };
  });

  describe('transformMagentoSimpleProduct', () => {

    it('should transform a MagentoProduct to a DaffProduct', () => {
      expect(transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl)).toEqual(expectedDaffProduct);
    });

    describe('when there is a related bundle product', () => {
      let relatedProduct: MagentoBundledProduct;

      beforeEach(() => {
        relatedProduct = bundleProductFactory.create();
        stubMagentoProduct.related_products = [
          relatedProduct,
          ...stubMagentoProduct.related_products,
        ];
      });

      it('should transform to a daff composite product', () => {
        const result = transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl);

        expect(result.related[0].type).toEqual(DaffProductTypeEnum.Composite);
        expect(result.related[0].id).toEqual(relatedProduct.sku);
      });
    });

    describe('when there is a related configurable product', () => {
      let relatedProduct: MagentoConfigurableProduct;

      beforeEach(() => {
        relatedProduct = configurableProductFactory.create();
        stubMagentoProduct.related_products = [
          relatedProduct,
          ...stubMagentoProduct.related_products,
        ];
      });

      it('should transform to a daff configurable product', () => {
        const result = transformMagentoSimpleProduct(stubMagentoProduct, mediaUrl);

        expect(result.related[0].type).toEqual(DaffProductTypeEnum.Configurable);
        expect(result.related[0].id).toEqual(relatedProduct.sku);
      });
    });
  });
});
