import { TestBed } from '@angular/core/testing';

import {
  MagentoProductStockStatusEnum,
  MagentoBundledProduct,
  DaffMagentoSimpleProductTransformers,
} from '@daffodil/product/driver/magento';

import { transformMagentoBundledProduct } from './bundled-product-transformers';
import daffCompositeProductData from './spec-data/daff-composite-product.json';
import magentoBundledProductData from './spec-data/magento-bundled-product.json';

describe('DaffMagentoBundledProductTransformers', () => {
  const mediaUrl = 'media url';
  let simpleProductService: DaffMagentoSimpleProductTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    simpleProductService = TestBed.inject(DaffMagentoSimpleProductTransformers);
  });

  describe('transform', () => {
    let magentoBundledProduct: MagentoBundledProduct;

    beforeEach(() => {
      magentoBundledProduct = {
        ...magentoBundledProductData,
        stock_status: MagentoProductStockStatusEnum.InStock,
      };
      magentoBundledProduct.items[0].options[0].product.stock_status = MagentoProductStockStatusEnum.InStock;
      magentoBundledProduct.items[0].options[1].product.stock_status = MagentoProductStockStatusEnum.InStock;
    });

    it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
      expect(transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct)).toEqual(jasmine.objectContaining(daffCompositeProductData));
    });

    it('should replace the base prices with 0 when bundled product items are present', () => {
      expect(
        transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct).price,
      ).toEqual(0);
    });

    it('should add the base prices to the transformed product when bundled product items are missing', () => {
      magentoBundledProduct.items = [];
      expect(
        transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct).price,
      ).toEqual(magentoBundledProduct.price_range.maximum_price.regular_price.value);
    });
  });
});
