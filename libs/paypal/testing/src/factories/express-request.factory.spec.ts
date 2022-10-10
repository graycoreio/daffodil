import { TestBed } from '@angular/core/testing';

import { DaffPaypalPaymentResponse } from '@daffodil/paypal';

import { DaffPaypalPaymentResponseFactory } from './response.factory';

describe('@daffodil/paypal/testing | DaffPaypalPaymentResponseFactory', () => {
  let paypalTokenResponseFactory: DaffPaypalPaymentResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalPaymentResponseFactory],
    });

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalPaymentResponseFactory);
  });

  it('should be created', () => {
    expect(paypalTokenResponseFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalPaymentResponse;

    beforeEach(() => {
      result = paypalTokenResponseFactory.create();
    });

    it('should return a DaffPaypalPaymentResponse with all required fields defined', () => {
      expect(result.method).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
