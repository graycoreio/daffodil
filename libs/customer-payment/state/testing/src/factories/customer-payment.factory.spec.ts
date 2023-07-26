import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentEntity } from '@daffodil/customer-payment/state';

import { DaffCustomerPaymentEntityFactory } from './customer-payment.factory';

describe('@daffodil/customer-payment/state/testing | DaffCustomerPaymentEntityFactory', () => {
  let factory: DaffCustomerPaymentEntityFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentEntityFactory],
    });

    factory = TestBed.inject(DaffCustomerPaymentEntityFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPaymentEntity;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.daffErrors).toBeDefined();
      expect(result.daffState).toBeDefined();
      expect(result.daffTemp).toBeDefined();
    });
  });
});
