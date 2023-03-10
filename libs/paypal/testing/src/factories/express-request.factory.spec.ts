import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressPaymentRequest } from '@daffodil/paypal';

import { DaffPaypalExpressPaymentRequestFactory } from './express-request.factory';

describe('@daffodil/paypal/testing | DaffPaypalExpressPaymentRequestFactory', () => {
  let paypalTokenResponseFactory: DaffPaypalExpressPaymentRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalExpressPaymentRequestFactory],
    });

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressPaymentRequestFactory);
  });

  it('should be created', () => {
    expect(paypalTokenResponseFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalExpressPaymentRequest;

    beforeEach(() => {
      result = paypalTokenResponseFactory.create();
    });

    it('should return a DaffPaypalExpressPaymentRequest with all required fields defined', () => {
      expect(result.kind).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
