import { TestBed } from '@angular/core/testing';

import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaymentResponseFactory } from './payment-response.factory';

describe('@daffodil/payment/testing | DaffPaymentResponseFactory', () => {
  let paymentResponseFactory: DaffPaymentResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaymentResponseFactory],
    });

    paymentResponseFactory = TestBed.inject(DaffPaymentResponseFactory);
  });

  it('should be created', () => {
    expect(paymentResponseFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffPaymentResponse;

    beforeEach(() => {
      result = paymentResponseFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.method).toBeDefined();
    });
  });
});
