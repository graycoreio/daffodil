import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressPaymentResponse } from '@daffodil/paypal';

import { DaffPaypalExpressPaymentResponseFactory } from './response.factory';

describe('@daffodil/paypal/testing | DaffPaypalExpressPaymentResponseFactory', () => {
  let paypalTokenResponseFactory: DaffPaypalExpressPaymentResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalExpressPaymentResponseFactory],
    });

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressPaymentResponseFactory);
  });

  it('should be created', () => {
    expect(paypalTokenResponseFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalExpressPaymentResponse;

    beforeEach(() => {
      result = paypalTokenResponseFactory.create();
    });

    it('should return a DaffPaypalExpressPaymentResponse with all required fields defined', () => {
      expect(result.method).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
