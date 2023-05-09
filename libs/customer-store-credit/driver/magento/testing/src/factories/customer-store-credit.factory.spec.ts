import { TestBed } from '@angular/core/testing';

import { MagentoCustomerStoreCredit } from '@daffodil/customer-store-credit/driver/magento';

import { MagentoCustomerStoreCreditFactory } from './customer-store-credit.factory';

describe('@daffodil/customer-store-credit/driver/magento/testing | MagentoCustomerStoreCreditFactory', () => {
  let factory: MagentoCustomerStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerStoreCreditFactory],
    });

    factory = TestBed.inject(MagentoCustomerStoreCreditFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomerStoreCredit;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CustomerStoreCredit with all required fields defined', () => {
      expect(result.current_balance).toBeDefined();
      expect(result.enabled).toBeDefined();
    });
  });
});
