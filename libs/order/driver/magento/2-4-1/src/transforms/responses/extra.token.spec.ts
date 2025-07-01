import { TestBed } from '@angular/core/testing';

import { MagentoOrderExtraTransform } from '@daffodil/order/driver/magento/2-4-1';

import {
  provideMagentoOrderExtraTransforms,
  MAGENTO_ORDER_EXTRA_TRANSFORMS,
} from './extra.token';

describe('@daffodil/order/driver/magento | provideMagentoOrderExtraTransforms', () => {
  let transforms: MagentoOrderExtraTransform[];
  let result: MagentoOrderExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideMagentoOrderExtraTransforms(...transforms),
      ],
    });

    result = TestBed.inject(MAGENTO_ORDER_EXTRA_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
