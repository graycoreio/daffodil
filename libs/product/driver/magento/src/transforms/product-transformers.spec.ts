import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import { MagentoBundledProduct } from '@daffodil/product/driver/magento';
import {
  MagentoProduct,
  MagentoConfigurableProduct,
} from '@daffodil/product/driver/magento';
import {
  MagentoProductFactory,
  MagentoBundledProductFactory,
  MagentoConfigurableProductFactory,
} from '@daffodil/product/driver/magento/testing';

import {
  transformMagentoProduct,
  transformManyMagentoProducts,
} from './product-transformers';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

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
        expect(transformMagentoProduct(transformMagentoSimpleProduct(stubMagentoProducts[0], mediaUrl), stubMagentoProducts[0]).type).toEqual(DaffProductTypeEnum.Simple);
      });
    });

    describe('when the product is a bundled product', () => {
      let magentoBundledProduct: MagentoBundledProduct;

      beforeEach(() => {
        magentoBundledProduct = new MagentoBundledProductFactory().create();
      });

      it('should return a composite product', () => {
        expect(transformMagentoProduct(transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct).type).toEqual(DaffProductTypeEnum.Composite);
      });
    });

    describe('when the product is a configurable product', () => {
      let magentoConfigurableProduct: MagentoConfigurableProduct;

      beforeEach(() => {
        magentoConfigurableProduct = new MagentoConfigurableProductFactory().create();
      });

      it('should return a configurable product', () => {
        expect(transformMagentoProduct(transformMagentoSimpleProduct(magentoConfigurableProduct, mediaUrl), magentoConfigurableProduct).type).toEqual(DaffProductTypeEnum.Configurable);
      });
    });
  });

  describe('transformMany', () => {

    it('should transform many products', () => {
      expect(transformManyMagentoProducts(stubMagentoProducts, mediaUrl).length).toEqual(2);
    });
  });
});
