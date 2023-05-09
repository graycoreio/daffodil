import { TestBed } from '@angular/core/testing';

import { MagentoCartWithStoreCredit } from '@daffodil/cart-store-credit/driver/magento';

import { MagentoCartWithStoreCreditFactory } from './cart-with-store-credit.factory';

describe('@daffodil/cart-store-credit/driver/magento/testing | MagentoCartWithStoreCreditFactory', () => {
  let factory: MagentoCartWithStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartWithStoreCreditFactory],
    });

    factory = TestBed.inject(MagentoCartWithStoreCreditFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartWithStoreCredit;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CustomerStoreCredit with all required fields defined', () => {
      expect(result.applied_store_credit).toBeDefined();
      expect(result.applied_store_credit.applied_balance).toBeDefined();
      expect(result.applied_store_credit.enabled).toBeDefined();
    });
  });
});
