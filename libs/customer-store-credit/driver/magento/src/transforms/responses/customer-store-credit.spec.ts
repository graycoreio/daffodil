import { TestBed } from '@angular/core/testing';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { MagentoCustomerStoreCredit } from '@daffodil/customer-store-credit/driver/magento';
import { MagentoCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/driver/magento/testing';

import { magentoCustomerStoreCreditTransform } from './customer-store-credit';

describe('@daffodil/customer-store-credit/driver/magento | magentoCustomerStoreCreditTransform', () => {
  let storeCreditFactory: MagentoCustomerStoreCreditFactory;
  let mockStoreCredit: MagentoCustomerStoreCredit;
  let result: DaffCustomerStoreCredit;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCustomerStoreCreditFactory);

    mockStoreCredit = storeCreditFactory.create();

    result = magentoCustomerStoreCreditTransform(mockStoreCredit);
  });

  it('should transform', () => {
    expect(result.balance).toEqual(mockStoreCredit.current_balance.value);
  });
});
