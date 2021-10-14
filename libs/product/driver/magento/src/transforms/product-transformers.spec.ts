import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

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
  });

  describe('transformManyMagentoProducts', () => {

    it('should transform many products', () => {
      expect(service.transformManyMagentoProducts(stubMagentoProducts, mediaUrl).length).toEqual(2);
    });
  });
});
