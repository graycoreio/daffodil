import { TestBed } from '@angular/core/testing';

import { MagentoConfigurableProductVariantExtraTransform } from '@daffodil/product-configurable/driver/magento';

import {
  provideDaffProductConfigurableMagentoExtraVariantTransforms,
  DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS,
} from './extra.token';

describe('@daffodil/product/driver/magento | provideDaffProductConfigurableMagentoExtraVariantTransforms', () => {
  let transforms: Array<MagentoConfigurableProductVariantExtraTransform>;
  let result: Array<MagentoConfigurableProductVariantExtraTransform>;

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductConfigurableMagentoExtraVariantTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
