import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductResponseExtraTransform } from '@daffodil/product/driver/magento';

import {
  daffProvideProductMagentoExtraProductResponseTransforms,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from './response-extra.token';


describe('daffProvideProductMagentoExtraProductResponseTransforms', () => {
  let transforms: DaffMagentoProductResponseExtraTransform[];
  let result: DaffMagentoProductResponseExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideProductMagentoExtraProductResponseTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
