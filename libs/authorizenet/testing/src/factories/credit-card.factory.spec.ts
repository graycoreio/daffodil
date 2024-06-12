import { TestBed } from '@angular/core/testing';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';

import { DaffAuthorizeNetCreditCardFactory } from './credit-card.factory';

describe('@daffodil/payment/testing | DaffAuthorizeNetCreditCardFactory', () => {
  let factory: DaffAuthorizeNetCreditCardFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAuthorizeNetCreditCardFactory],
    });

    factory = TestBed.inject(DaffAuthorizeNetCreditCardFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAuthorizeNetCreditCard;

    beforeEach(() => {
      result = factory.create();
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
