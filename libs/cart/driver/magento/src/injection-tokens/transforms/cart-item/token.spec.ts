import { TestBed } from '@angular/core/testing';

import { DaffCartMagentoCartItemTransform } from '@daffodil/cart/driver/magento';

import {
  provideDaffCartMagentoCartItemTransforms,
  DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS,
} from './token';

describe('provideDaffCartMagentoCartItemTransforms', () => {
  let transforms: DaffCartMagentoCartItemTransform[];
  let result: DaffCartMagentoCartItemTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffCartMagentoCartItemTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
