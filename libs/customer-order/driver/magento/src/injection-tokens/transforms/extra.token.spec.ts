import { TestBed } from '@angular/core/testing';

import { DaffMagentoCustomerOrderExtraTransform } from '@daffodil/customer-order/driver/magento';

import {
  daffProvideCustomerOrderMagentoExtraOrderTransforms,
  DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS,
} from './extra.token';

describe('@daffodil/customer-order/driver/magento | daffProvideCustomerOrderMagentoExtraOrderTransforms', () => {
  let transforms: DaffMagentoCustomerOrderExtraTransform[];
  let result: DaffMagentoCustomerOrderExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideCustomerOrderMagentoExtraOrderTransforms(...transforms),
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
