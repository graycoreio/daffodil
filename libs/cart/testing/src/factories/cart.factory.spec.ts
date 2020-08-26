import { TestBed } from '@angular/core/testing';

import { DaffCartFactory } from './cart.factory';
import { DaffCart } from '@daffodil/cart';

describe('Cart | Testing | Factories | DaffCartFactory', () => {
  
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartFactory]
    });

    cartFactory = TestBed.get(DaffCartFactory);
  });

  it('should be created', () => {
    expect(cartFactory).toBeTruthy();
  });

  describe('create', () => {

    let result : DaffCart;

    beforeEach(() => {
      result = cartFactory.create();
    });

    it('should return a Cart', () => {
      expect(result).toBeDefined();
    });

    describe('Cart object', () => {
      
      it('should have no CartItems', () => {
        expect(result.items.length).toEqual(0)
      });

      it('should not have a billing address', () => {
        expect(result.billing_address).toBeNull();
      });

      it('should not have a shipping address', () => {
        expect(result.shipping_address).toBeNull();
      });

      it('should not have a payment', () => {
        expect(result.payment).toEqual(null);
			});
			
			it('should have cart totals', () => {
				expect(result.totals.length).toBeGreaterThan(0);
			});
    });
  });

  describe('createMany', () => {
    let result: DaffCart[];

    it('should create as many carts as desired', () => {
      result = cartFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = cartFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  })
});
