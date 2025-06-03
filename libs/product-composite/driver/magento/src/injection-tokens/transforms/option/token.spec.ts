import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductItemOption } from '@daffodil/product-composite';
import {
  provideDaffProductCompositeMagentoExtraOptionTransforms,
  MagentoBundledProductItemOption,
  MagentoBundleProductOptionExtraTransform,
  MagentoBundleProductOptionTransform,
} from '@daffodil/product-composite/driver/magento';
import { MagentoBundledProductItemOptionFactory } from '@daffodil/product-composite/driver/magento/testing';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM } from './token';

describe('@daffodil/product/driver/magento | DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM', () => {
  let magentoProductFactory: MagentoBundledProductItemOptionFactory;
  let magentoProduct: MagentoBundledProductItemOption;
  let result: DaffCompositeProductItemOption;

  let transforms: Array<MagentoBundleProductOptionExtraTransform>;
  let productTransform: MagentoBundleProductOptionTransform;

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
        ...provideDaffProductCompositeMagentoExtraOptionTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(MagentoBundledProductItemOptionFactory);
    productTransform = TestBed.inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM);

    magentoProduct = magentoProductFactory.create();
    result = productTransform(magentoProduct);
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoProduct.uid} transform 1 transform 2`);
  });
});
