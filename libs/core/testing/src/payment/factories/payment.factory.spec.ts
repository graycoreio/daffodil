import { TestBed } from '@angular/core/testing';

import { DaffPaymentFactory, MockPaymentInfo } from './payment.factory';
import { PaymentInfo } from '@daffodil/core';

describe('Core | Checkout | Factories | BillingFactory', () => {
  
  let paymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffPaymentFactory
      ]
    });

    paymentFactory = TestBed.get(DaffPaymentFactory);
  });

  it('should be created', () => {
    expect(paymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: MockPaymentInfo;

    beforeEach(() => {
      result = paymentFactory.create();
    });

    it('should return a MockPaymentInfo with name', () => {
      expect(result.name).toBeDefined();
    });

    it('should return an MockPaymentInfo with cardnumber', () => {
      expect(result.cardnumber).toBeDefined();
    });

    it('should return an MockPaymentInfo with month', () => {
      expect(result.month).toBeDefined();
    });

    it('should return an MockPaymentInfo with year', () => {
      expect(result.year).toBeDefined();
    });

    it('should return an MockPaymentInfo with securitycode', () => {
      expect(result.securitycode).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: PaymentInfo[];

    it('should create as many payments as desired', () => {
      result = paymentFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = paymentFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
