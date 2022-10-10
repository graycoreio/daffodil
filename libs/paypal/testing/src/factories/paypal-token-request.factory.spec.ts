import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressTokenRequest } from '@daffodil/paypal';

import { DaffPaypalExpressTokenRequestFactory } from './paypal-token-request.factory';

describe('@daffodil/paypal/testing | DaffPaypalExpressTokenRequestFactory', () => {
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalExpressTokenRequestFactory],
    });

    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);
  });

  it('should be created', () => {
    expect(paypalTokenRequestFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalExpressTokenRequest;

    beforeEach(() => {
      result = paypalTokenRequestFactory.create();
    });

    it('should return a DaffPaypalExpressTokenRequest with all required fields defined', () => {
      expect(result.button).toBeDefined();
    });
  });
});
