import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import {
  MagentoProductStockStatusEnum,
  DaffMagentoSimpleProductTransformers,
} from '@daffodil/product/driver/magento';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  MagentoBundledProduct,
  MagentoBundledProductItemOption,
  MagentoBundledProductItemTransformer,
} from '@daffodil/product-composite/driver/magento';
import {
  MagentoBundledProductFactory,
  MagentoBundledProductItemFactory,
  MagentoBundledProductItemOptionFactory,
} from '@daffodil/product-composite/driver/magento/testing';

import { MagentoBundledProductTransformer } from './product-transformer.service';

describe('@daffodil/product-composite/driver/magento | MagentoBundledProductTransformer', () => {
  const mediaUrl = 'media url';
  let service: MagentoBundledProductTransformer;
  let simpleProductService: DaffMagentoSimpleProductTransformers;
  let magentoOptionFactory: MagentoBundledProductItemOptionFactory;
  let magentoItemFactory: MagentoBundledProductItemFactory;
  let magentoBundledProductFactory: MagentoBundledProductFactory;
  let magentoBundledProduct: MagentoBundledProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MagentoBundledProductTransformer,
        MagentoBundledProductItemTransformer,
      ],
    });

    service = TestBed.inject(MagentoBundledProductTransformer);
    magentoBundledProductFactory = TestBed.inject(MagentoBundledProductFactory);
    simpleProductService = TestBed.inject(DaffMagentoSimpleProductTransformers);
    magentoOptionFactory = TestBed.inject(MagentoBundledProductItemOptionFactory);
    magentoItemFactory = TestBed.inject(MagentoBundledProductItemFactory);

    magentoBundledProduct = magentoBundledProductFactory.create({
      stock_status: MagentoProductStockStatusEnum.InStock,
      items: magentoItemFactory.createMany(1, {
        options: magentoOptionFactory.createMany(2),
      }),
    });
  });

  describe('transform', () => {
    let result: DaffCompositeProduct;

    beforeEach(() => {
      magentoBundledProduct.items[0].options[0].product.stock_status = MagentoProductStockStatusEnum.InStock;
      magentoBundledProduct.items[0].options[1].product.stock_status = MagentoProductStockStatusEnum.InStock;

      result = service.transform(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
    });

    it('should transform a MagentoBundledProduct to a DaffCompositeProduct', () => {
      expect(result.type).toEqual(DaffProductTypeEnum.Composite);
    });

    it('should replace the base prices with 0 when bundled product items are present', () => {
      expect(result.price).toEqual(0);
    });

    it('should add the base prices to the transformed product when bundled product items are missing', () => {
      magentoBundledProduct.items = [];
      result = service.transform(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
      expect(result.price).toEqual(magentoBundledProduct.price_range.maximum_price.regular_price.value);
    });

    describe('when the item options are in the wrong order', () => {
      let firstOption: MagentoBundledProductItemOption;
      let secondOption: MagentoBundledProductItemOption;

      beforeEach(() => {
        firstOption = magentoOptionFactory.create({
          position: 1,
        });
        secondOption = magentoOptionFactory.create({
          position: 2,
        });

        magentoBundledProduct.items[0].options = [
          secondOption,
          firstOption,
        ];

        result = service.transform(simpleProductService.transformMagentoSimpleProduct(magentoBundledProduct, mediaUrl), magentoBundledProduct);
      });

      it('should sort them in the correct order', () => {
        expect(result.items[0].options[0].id).toEqual(firstOption.uid);
        expect(result.items[0].options[1].id).toEqual(secondOption.uid);
      });
    });
  });
});
