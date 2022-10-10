import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';

import { DaffPaypalExpressTokenResponseFactory } from './paypal-token-response.factory';

describe('@daffodil/paypal/testing | DaffPaypalExpressTokenResponseFactory', () => {
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalExpressTokenResponseFactory],
    });

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
  });

  it('should be created', () => {
    expect(paypalTokenResponseFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalExpressTokenResponse;

    beforeEach(() => {
      result = paypalTokenResponseFactory.create();
    });

    it('should return a DaffPaypalExpressTokenResponse with all required fields defined', () => {
      expect(result.token).toBeDefined();
      expect(result.urls.start).toBeDefined();
      expect(result.urls.edit).toBeDefined();
    });
  });
});
