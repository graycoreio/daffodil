import { TestBed } from '@angular/core/testing';

import { DaffCartMagentoCartItemExtraTransform } from '@daffodil/cart/driver/magento';

import {
  daffProvideCartMagentoExtraCartItemTransforms,
  DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS,
} from './cart-item-extra.token';

describe('daffProvideCartMagentoExtraCartItemTransforms', () => {
  let transforms: DaffCartMagentoCartItemExtraTransform[];
  let result: DaffCartMagentoCartItemExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideCartMagentoExtraCartItemTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
