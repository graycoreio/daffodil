import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentAuthorizeNet } from '@daffodil/customer-payment-authorizenet';

import { DaffCustomerPaymentAuthorizeNetFactory } from './customer-payment.factory';

describe('@daffodil/customer-payment/testing | DaffCustomerPaymentAuthorizeNetFactory', () => {
  let factory: DaffCustomerPaymentAuthorizeNetFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentAuthorizeNetFactory],
    });

    factory = TestBed.inject(DaffCustomerPaymentAuthorizeNetFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPaymentAuthorizeNet;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.data.expMonth).toBeDefined();
      expect(result.data.expYear).toBeDefined();
      expect(result.data.last4).toBeDefined();
      expect(result.data.type).toBeDefined();
    });
  });
});
