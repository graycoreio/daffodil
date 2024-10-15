import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductResponseExtraTransform } from '@daffodil/product/driver/magento';

import {
  provideDaffProductMagentoExtraProductResponseTransforms,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from './response-extra.token';


describe('provideDaffProductMagentoExtraProductResponseTransforms', () => {
  let transforms: DaffMagentoProductResponseExtraTransform[];
  let result: DaffMagentoProductResponseExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductMagentoExtraProductResponseTransforms(...transforms),
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
