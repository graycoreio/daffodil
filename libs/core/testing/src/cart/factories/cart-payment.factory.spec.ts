import { TestBed } from '@angular/core/testing';

import { DaffCartItemFactory } from './cart-item.factory';
import { CartPayment } from '@daffodil/core';
import { DaffCartPaymentFactory } from './cart-payment.factory';

describe('Core | Testing | Cart | Factories | CartPaymentFactory', () => {
  
  let cartPaymentFactory: DaffCartPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartPaymentFactory]
    });

    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);
  });

  it('should be created', () => {
    expect(cartPaymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: CartPayment;

    beforeEach(() => {
      result = cartPaymentFactory.create();
    });
    
    xit('should return a CartPayment with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: CartPayment[];

    it('should create as many cart payments as desired', () => {
      result = cartPaymentFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartPaymentFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
