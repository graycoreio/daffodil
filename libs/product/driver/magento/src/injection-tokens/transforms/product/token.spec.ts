import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import {
  DaffMagentoProductExtraTransform,
  DaffMagentoProductTransform,
  daffProvideProductMagentoExtraProductTransforms,
  MagentoProduct,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM } from './token';

describe('@daffodil/product/driver/magento | DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM', () => {
  let magentoProductFactory: MagentoProductFactory;
  let magentoProduct: MagentoProduct;
  let result: DaffProduct;

  let transforms: DaffMagentoProductExtraTransform[];
  let productTransform: DaffMagentoProductTransform;

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
        ...daffProvideProductMagentoExtraProductTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(MagentoProductFactory);
    productTransform = TestBed.inject(DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM);

    magentoProduct = magentoProductFactory.create();
    result = productTransform(magentoProduct, 'test');
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoProduct.sku} transform 1 transform 2`);
  });
});
