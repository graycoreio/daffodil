import { TestBed } from '@angular/core/testing';

import { DaffOrderFactory } from './order.factory';
import { DaffOrder } from '@daffodil/order';

describe('Checkout | Testing | Order | Factories | DaffOrderFactory', () => {

  let orderFactory: DaffOrderFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderFactory]
    });

    orderFactory = TestBed.get(DaffOrderFactory);
  });

  it('should be created', () => {
    expect(orderFactory).toBeTruthy();
  });

  describe('create', () => {

    let result : DaffOrder;

    beforeEach(() => {
      result = orderFactory.create();
    });

    it('should return a Order', () => {
      expect(result).toBeDefined();
    });

    describe('Order object', () => {

      it('should have no OrderItems', () => {
        expect(result.items.length).toEqual(0)
      });

      it('should have no OrderAddresses', () => {
        expect(result.addresses.length).toEqual(0);
      });

      it('should not have a DaffOrderPayment', () => {
        expect(result.payment).toEqual(null);
      });
    });
  });

  describe('createMany', () => {
    let result: DaffOrder[];

    it('should create as many orders as desired', () => {
      result = orderFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = orderFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  })
});
