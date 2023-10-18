import { TestBed } from '@angular/core/testing';

import {
  MagentoProductStockStatusEnum,
  DaffMagentoSimpleProductTransformers,
} from '@daffodil/product/driver/magento';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  MagentoBundledProduct,
  MagentoBundledProductItemOption,
} from '@daffodil/product-composite/driver/magento';
import {
  MagentoBundledProductFactory,
  MagentoBundledProductItemOptionFactory,
} from '@daffodil/product-composite/driver/magento/testing';

import { transformMagentoBundledProduct } from './bundled-product-transformers';
import daffCompositeProductData from './spec-data/daff-composite-product.json';
import magentoBundledProductData from './spec-data/magento-bundled-product.json';

describe('DaffMagentoBundledProductTransformers', () => {
  const mediaUrl = 'media url';
  let simpleProductService: DaffMagentoSimpleProductTransformers;
  let bundleProductFactory: MagentoBundledProductFactory;
  let optionFactory: MagentoBundledProductItemOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    simpleProductService = TestBed.inject(DaffMagentoSimpleProductTransformers);
    bundleProductFactory = TestBed.inject(MagentoBundledProductFactory);
    optionFactory = TestBed.inject(MagentoBundledProductItemOptionFactory);
  });

  describe('transform', () => {
    let magentoBundledProduct: MagentoBundledProduct;
    let result: DaffCompositeProduct;

    beforeEach(() => {
      magentoBundledProduct = {
        ...magentoBundledProductData,
        stock_status: MagentoProductStockStatusEnum.InStock,
      };
      magentoBundledProduct.items[0].options[0].product.stock_status = MagentoProductStockStatusEnum.InStock;
      magentoBundledProduct.items[0].options[1].product.stock_status = MagentoProductStockStatusEnum.InStock;

      result = transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
    });

    it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
      expect(result).toEqual(jasmine.objectContaining(daffCompositeProductData));
    });

    it('should replace the base prices with 0 when bundled product items are present', () => {
      expect(result.price).toEqual(0);
    });

    it('should add the base prices to the transformed product when bundled product items are missing', () => {
      magentoBundledProduct.items = [];
      result = transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
      expect(result.price).toEqual(magentoBundledProduct.price_range.maximum_price.regular_price.value);
    });

    describe('when the item options are in the wrong order', () => {
      let firstOption: MagentoBundledProductItemOption;
      let secondOption: MagentoBundledProductItemOption;

      beforeEach(() => {
        magentoBundledProduct = bundleProductFactory.create();
        firstOption = optionFactory.create({
          position: 1,
        });
        secondOption = optionFactory.create({
          position: 2,
        });

        magentoBundledProduct.items[0].options = [
          secondOption,
          firstOption,
        ];

        result = transformMagentoBundledProduct(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
      });

      it('should sort them in the correct order', () => {
        expect(result.items[0].options[0].id).toEqual(firstOption.uid);
        expect(result.items[0].options[1].id).toEqual(secondOption.uid);
      });
    });
  });
});
