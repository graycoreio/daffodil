import { TestBed } from '@angular/core/testing';

import { DaffPaypalTokenResponse } from '@daffodil/paypal';

import { DaffPaypalTokenResponseFactory } from './paypal-token-response.factory';

describe('Paypal | Testing | Factories | DaffPaypalTokenResponseFactory', () => {
  
  let paypalTokenResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffPaypalTokenResponseFactory]
    });

    paypalTokenResponseFactory = TestBed.get(DaffPaypalTokenResponseFactory);
  });

  it('should be created', () => {
    expect(paypalTokenResponseFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffPaypalTokenResponse;

    beforeEach(() => {
      result = paypalTokenResponseFactory.create();
    });
    
    it('should return a DaffPaypalTokenResponse with all required fields defined', () => {
      expect(result.token).toBeDefined(); 
      expect(result.urls.start).toBeDefined(); 
      expect(result.urls.edit).toBeDefined(); 
    });
  });

  describe('createMany', () => {
    let result: DaffPaypalTokenResponse[];

    it('should create as many paypalTokenResponses as desired', () => {
      result = paypalTokenResponseFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = paypalTokenResponseFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
