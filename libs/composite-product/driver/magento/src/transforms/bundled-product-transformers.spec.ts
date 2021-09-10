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
    const magentoBundledProduct: MagentoBundledProduct = {
      ...magentoBundledProductData,
      stock_status: MagentoProductStockStatusEnum.InStock,
    };
    magentoBundledProduct.items[0].options[0].product.stock_status = MagentoProductStockStatusEnum.InStock;
    magentoBundledProduct.items[0].options[1].product.stock_status = MagentoProductStockStatusEnum.InStock;

    it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
      expect(transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct)).toEqual(jasmine.objectContaining(daffCompositeProductData));
    });
  });
});
