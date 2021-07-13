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

import { DaffMagentoProductsTransformer } from './product-transformers';

describe('DaffMagentoProductsTransformer', () => {
  const mediaUrl = 'media url';
  let stubMagentoProducts: MagentoProduct[];
  let service: DaffMagentoProductsTransformer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaffMagentoProductsTransformer);
    stubMagentoProducts = new MagentoProductFactory().createMany(2);
  });

  describe('transformMagentoProduct', () => {

    describe('when the product is a simple product', () => {

      it('should return a simple product', () => {
        expect(service.transformMagentoProduct(stubMagentoProducts[0], mediaUrl).type).toEqual(DaffProductTypeEnum.Simple);
      });
    });

    describe('when the product is a bundled product', () => {
      let magentoBundledProduct: MagentoBundledProduct;

      beforeEach(() => {
        magentoBundledProduct = new MagentoBundledProductFactory().create();
      });

      it('should return a composite product', () => {
        expect(service.transformMagentoProduct(magentoBundledProduct, mediaUrl).type).toEqual(DaffProductTypeEnum.Composite);
      });
    });

    describe('when the product is a configurable product', () => {
      let magentoConfigurableProduct: MagentoConfigurableProduct;

      beforeEach(() => {
        magentoConfigurableProduct = new MagentoConfigurableProductFactory().create();
      });

      it('should return a configurable product', () => {
        expect(service.transformMagentoProduct(magentoConfigurableProduct, mediaUrl).type).toEqual(DaffProductTypeEnum.Configurable);
      });
    });
  });

  describe('transformManyMagentoProducts', () => {

    it('should transform many products', () => {
      expect(service.transformManyMagentoProducts(stubMagentoProducts, mediaUrl).length).toEqual(2);
    });
  });
});
