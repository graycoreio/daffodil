import { TestBed } from '@angular/core/testing';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { DaffCustomerStoreCreditFactory } from './customer-store-credit.factory';

describe('@daffodil/customer-store-credit/testing | DaffCustomerStoreCreditFactory', () => {
  let storeCreditFactory: DaffCustomerStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerStoreCreditFactory],
    });

    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);
  });

  it('should be created', () => {
    expect(storeCreditFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerStoreCredit;

    beforeEach(() => {
      result = storeCreditFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.balance).toBeDefined();
    });
  });
});
