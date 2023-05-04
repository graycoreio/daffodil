import { TestBed } from '@angular/core/testing';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';

import { DaffCartWithStoreCreditFactory } from './cart-with-store-credit.factory';

describe('@daffodil/cart-store-credit/testing | DaffCartWithStoreCreditFactory', () => {
  let storeCreditFactory: DaffCartWithStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartWithStoreCreditFactory],
    });

    storeCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);
  });

  it('should be created', () => {
    expect(storeCreditFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCartWithStoreCredit;

    beforeEach(() => {
      result = storeCreditFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.appliedStoreCredit).toBeDefined();
    });
  });
});
