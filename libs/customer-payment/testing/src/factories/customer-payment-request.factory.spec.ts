import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentRequest } from '@daffodil/customer-payment';

import { DaffCustomerPaymentRequestFactory } from './customer-payment-request.factory';

describe('@daffodil/customer-payment/testing | DaffCustomerPaymentRequestFactory', () => {
  let paymentFactory: DaffCustomerPaymentRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerPaymentRequestFactory],
    });

    paymentFactory = TestBed.inject(DaffCustomerPaymentRequestFactory);
  });

  it('should be created', () => {
    expect(paymentFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerPaymentRequest;

    beforeEach(() => {
      result = paymentFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.default).toBeDefined();
      expect(result.address).toBeDefined();
      expect(result.nickname).toBeDefined();
      expect(result.owner).toBeDefined();
    });
  });
});
