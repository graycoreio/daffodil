import { TestBed } from '@angular/core/testing';

import { MagentoBundleProductOptionExtraTransform } from '@daffodil/product-composite/driver/magento';

import {
  provideDaffProductCompositeMagentoExtraOptionTransforms,
  DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS,
} from './extra.token';

describe('@daffodil/product/driver/magento | provideDaffProductCompositeMagentoExtraOptionTransforms', () => {
  let transforms: Array<MagentoBundleProductOptionExtraTransform>;
  let result: Array<MagentoBundleProductOptionExtraTransform>;

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductCompositeMagentoExtraOptionTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
