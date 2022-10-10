import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressPaymentData } from '@daffodil/paypal';

import { DaffPaypalExpressPaymentDataFactory } from './express-payment-data.factory';

describe('@daffodil/paypal/testing | DaffPaypalExpressPaymentDataFactory', () => {
  let paypalTokenRequestFactory: DaffPaypalExpressPaymentDataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalExpressPaymentDataFactory],
    });

    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressPaymentDataFactory);
  });

  it('should be created', () => {
    expect(paypalTokenRequestFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalExpressPaymentData;

    beforeEach(() => {
      result = paypalTokenRequestFactory.create();
    });

    it('should return a DaffPaypalExpressPaymentData with all required fields defined', () => {
      expect(result.token).toBeDefined();
      expect(result.payerId).toBeDefined();
    });
  });
});
