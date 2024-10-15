import { TestBed } from '@angular/core/testing';

import { DaffMagentoCustomerOrderExtraTransform } from '@daffodil/customer-order/driver/magento/2-4-5';

import {
  provideDaffCustomerOrderMagentoExtraOrderTransforms,
  DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS,
} from './extra.token';

describe('@daffodil/customer-order/driver/magento/2-4-5 | provideDaffCustomerOrderMagentoExtraOrderTransforms', () => {
  let transforms: DaffMagentoCustomerOrderExtraTransform[];
  let result: DaffMagentoCustomerOrderExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffCustomerOrderMagentoExtraOrderTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
