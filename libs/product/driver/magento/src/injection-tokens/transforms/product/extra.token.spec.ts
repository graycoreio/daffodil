import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductExtraTransform } from '@daffodil/product/driver/magento';

import {
  provideDaffProductMagentoExtraProductTransforms,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
} from './extra.token';

describe('@daffodil/product/driver/magento | provideDaffProductMagentoExtraProductTransforms', () => {
  let transforms: DaffMagentoProductExtraTransform[];
  let result: DaffMagentoProductExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductMagentoExtraProductTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
