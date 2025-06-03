import { TestBed } from '@angular/core/testing';

import { MagentoBundleProductItemExtraTransform } from '@daffodil/product-composite/driver/magento';

import {
  provideDaffProductCompositeMagentoExtraItemTransforms,
  DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS,
} from './extra.token';

describe('@daffodil/product/driver/magento | provideDaffProductCompositeMagentoExtraItemTransforms', () => {
  let transforms: Array<MagentoBundleProductItemExtraTransform>;
  let result: Array<MagentoBundleProductItemExtraTransform>;

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductCompositeMagentoExtraItemTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
