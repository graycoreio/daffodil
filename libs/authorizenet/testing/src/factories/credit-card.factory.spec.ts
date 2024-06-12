import { TestBed } from '@angular/core/testing';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';

import { DaffAuthorizeNetCreditCardFactory } from './credit-card.factory';

describe('@daffodil/payment/testing | DaffAuthorizeNetCreditCardFactory', () => {
  let paymentResponseFactory: DaffAuthorizeNetCreditCardFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAuthorizeNetCreditCardFactory],
    });

    paymentResponseFactory = TestBed.inject(DaffAuthorizeNetCreditCardFactory);
  });

  it('should be created', () => {
    expect(paymentResponseFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAuthorizeNetCreditCard;

    beforeEach(() => {
      result = paymentResponseFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.cardnumber).toBeDefined();
      expect(result.month).toBeDefined();
      expect(result.year).toBeDefined();
      expect(result.securitycode).toBeDefined();
    });
  });
});
