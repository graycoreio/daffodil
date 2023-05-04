import { TestBed } from '@angular/core/testing';

import { MagentoCustomerOrderWithStoreCredit } from '@daffodil/customer-store-credit/driver/magento';

import { MagentoCustomerOrderWithStoreCreditFactory } from './customer-order-with-store-credit.factory';

describe('@daffodil/customer-store-credit/driver/magento/testing | MagentoCustomerOrderWithStoreCreditFactory', () => {
  let factory: MagentoCustomerOrderWithStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerOrderWithStoreCreditFactory],
    });

    factory = TestBed.inject(MagentoCustomerOrderWithStoreCreditFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomerOrderWithStoreCredit;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CustomerOrderWithStoreCredit with all required fields defined', () => {
      expect(result.total.total_store_credit).toBeDefined();
    });
  });
});
