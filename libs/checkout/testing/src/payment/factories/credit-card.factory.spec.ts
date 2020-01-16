import { TestBed } from '@angular/core/testing';

import { DaffCreditCard } from '@daffodil/checkout';

import { DaffCreditCardFactory, MockCreditCard } from './credit-card.factory';

describe('Checkout | Testing | Factories | CreditCard', () => {
  
  let creditCardFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCreditCardFactory
      ]
    });

    creditCardFactory = TestBed.get(DaffCreditCardFactory);
  });

  it('should be created', () => {
    expect(creditCardFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: MockCreditCard;

    beforeEach(() => {
      result = creditCardFactory.create();
    });

    it('should return a MockCreditCard with name', () => {
      expect(result.name).toBeDefined();
    });

    it('should return an MockCreditCard with cardnumber', () => {
      expect(result.cardnumber).toBeDefined();
    });

    it('should return an MockCreditCard with month', () => {
      expect(result.month).toBeDefined();
    });

    it('should return an MockCreditCard with year', () => {
      expect(result.year).toBeDefined();
    });

    it('should return an MockCreditCard with securitycode', () => {
      expect(result.securitycode).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffCreditCard[];

    it('should create as many payments as desired', () => {
      result = creditCardFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = creditCardFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
