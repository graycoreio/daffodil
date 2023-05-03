import { TestBed } from '@angular/core/testing';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { MagentoCartWithStoreCredit } from '@daffodil/cart-store-credit/driver/magento';
import { MagentoCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/driver/magento/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { magentoCartWithStoreCreditTransform } from './cart-with-store-credit';

describe('@daffodil/cart-store-credit/driver/magento | magentoCartWithStoreCreditTransform', () => {
  let storeCreditFactory: MagentoCartWithStoreCreditFactory;
  let mockStoreCredit: MagentoCartWithStoreCredit;
  let cartFactory: DaffCartFactory;
  let result: DaffCartWithStoreCredit;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCartWithStoreCreditFactory);
    cartFactory = TestBed.inject(DaffCartFactory);

    mockStoreCredit = storeCreditFactory.create();

    result = magentoCartWithStoreCreditTransform(cartFactory.create(), mockStoreCredit);
  });

  it('should transform', () => {
    expect(result.appliedStoreCredit).toEqual(mockStoreCredit.applied_store_credit.applied_balance.value);
  });
});
