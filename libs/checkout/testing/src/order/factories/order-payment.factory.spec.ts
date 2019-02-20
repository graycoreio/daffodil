import { TestBed } from '@angular/core/testing';

import { OrderPayment } from '@daffodil/checkout';
import { DaffOrderPaymentFactory } from './order-payment.factory';

describe('Checkout | Testing | Order | Factories | OrderPaymentFactory', () => {
  
  let orderPaymentFactory: DaffOrderPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderPaymentFactory]
    });

    orderPaymentFactory = TestBed.get(DaffOrderPaymentFactory);
  });

  it('should be created', () => {
    expect(orderPaymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: OrderPayment;

    beforeEach(() => {
      result = orderPaymentFactory.create();
    });
    
    xit('should return a OrderPayment with all required fields defined', () => {

    });
  });

  describe('createMany', () => {
    let result: OrderPayment[];

    it('should create as many order payments as desired', () => {
      result = orderPaymentFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderPaymentFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
