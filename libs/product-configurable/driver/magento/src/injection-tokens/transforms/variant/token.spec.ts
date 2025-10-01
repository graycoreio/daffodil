import { TestBed } from '@angular/core/testing';

import { DaffConfigurableProductVariant } from '@daffodil/product-configurable';
import {
  provideDaffProductConfigurableMagentoExtraVariantTransforms,
  MagentoConfigurableProductVariant,
  MagentoConfigurableProductVariantExtraTransform,
  MagentoConfigurableProductVariantTransform,
} from '@daffodil/product-configurable/driver/magento';
import { MagentoConfigurableProductFactory } from '@daffodil/product-configurable/driver/magento/testing';

import { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM } from './token';

describe('@daffodil/product/driver/magento | DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM', () => {
  let magentoProductFactory: MagentoConfigurableProductFactory;
  let magentoProduct: MagentoConfigurableProductVariant;
  let result: DaffConfigurableProductVariant;

  let transforms: Array<MagentoConfigurableProductVariantExtraTransform>;
  let productTransform: MagentoConfigurableProductVariantTransform;

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
        ...provideDaffProductConfigurableMagentoExtraVariantTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(MagentoConfigurableProductFactory);
    productTransform = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM);

    magentoProduct = magentoProductFactory.create().variants[0];
    result = productTransform(magentoProduct);
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoProduct.product.sku} transform 1 transform 2`);
  });
});
