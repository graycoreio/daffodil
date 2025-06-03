import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductItem } from '@daffodil/product-composite';
import {
  provideDaffProductCompositeMagentoExtraItemTransforms,
  MagentoBundledProductItem,
  MagentoBundleProductItemExtraTransform,
  MagentoBundleProductItemTransform,
  MagentoBundledProductItemTransformer,
} from '@daffodil/product-composite/driver/magento';
import { MagentoBundledProductItemFactory } from '@daffodil/product-composite/driver/magento/testing';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM } from './token';

describe('@daffodil/product/driver/magento | DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM', () => {
  let magentoProductFactory: MagentoBundledProductItemFactory;
  let magentoProduct: MagentoBundledProductItem;
  let result: DaffCompositeProductItem;

  let transforms: Array<MagentoBundleProductItemExtraTransform>;
  let productTransform: MagentoBundleProductItemTransform;

  beforeEach(() => {
    transforms = [
      (daffProduct, product) => ({
        ...daffProduct,
        id: `${daffProduct.id} transform 1`,
      }),
      (daffProduct, product) => ({
        ...daffProduct,
        id: `${daffProduct.id} transform 2`,
      }),
    ];

    TestBed.configureTestingModule({
      providers: [
        MagentoBundledProductItemTransformer,
        ...provideDaffProductCompositeMagentoExtraItemTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(MagentoBundledProductItemFactory);
    productTransform = TestBed.inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM);

    magentoProduct = magentoProductFactory.create();
    result = productTransform(magentoProduct);
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoProduct.option_id} transform 1 transform 2`);
  });
});
