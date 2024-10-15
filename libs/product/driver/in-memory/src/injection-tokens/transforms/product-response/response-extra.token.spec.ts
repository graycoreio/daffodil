import { TestBed } from '@angular/core/testing';

import { DaffInMemoryProductResponseExtraTransform } from '@daffodil/product/driver/in-memory';

import {
  provideDaffProductInMemoryExtraProductResponseTransforms,
  DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from './response-extra.token';


describe('provideDaffProductInMemoryExtraProductResponseTransforms', () => {
  let transforms: DaffInMemoryProductResponseExtraTransform[];
  let result: DaffInMemoryProductResponseExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductInMemoryExtraProductResponseTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
