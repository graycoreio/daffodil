import { TestBed } from '@angular/core/testing';

import { DaffPaymentRequest } from '@daffodil/payment';

import { DaffPaymentRequestFactory } from './payment-request.factory';

describe('@daffodil/payment/testing | DaffPaymentRequestFactory', () => {
  let paymentRequestFactory: DaffPaymentRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaymentRequestFactory],
    });

    paymentRequestFactory = TestBed.inject(DaffPaymentRequestFactory);
  });

  it('should be created', () => {
    expect(paymentRequestFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffPaymentRequest;

    beforeEach(() => {
      result = paymentRequestFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.kind).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
