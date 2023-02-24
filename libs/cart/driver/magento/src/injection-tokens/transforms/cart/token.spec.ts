import { TestBed } from '@angular/core/testing';

import { DaffCartMagentoCartTransform } from '@daffodil/cart/driver/magento';

import {
  daffProvideCartMagentoCartTransforms,
  DAFF_CART_MAGENTO_CART_TRANSFORMS,
} from './token';

describe('daffProvideCartMagentoCartTransforms', () => {
  let transforms: DaffCartMagentoCartTransform[];
  let result: DaffCartMagentoCartTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideCartMagentoCartTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_CART_MAGENTO_CART_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
