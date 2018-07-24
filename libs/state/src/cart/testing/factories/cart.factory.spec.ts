import { TestBed } from '@angular/core/testing';

import { 
  CartFactory, 
  MockCart,
  MockCartAddress, 
  MockCartPayment, 
  MockCartShippingRate 
} from './cart.factory';

describe('State | Cart | Testing | CartFactory', () => {
  
  let cartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartFactory]
    });

    cartFactory = TestBed.get(CartFactory);
  });

  it('should be created', () => {
    expect(cartFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:MockCart;

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

      it('should have CartAddresses', () => {
        expect(result.addresses[0]).toEqual(jasmine.any(MockCartAddress));
      });

      it('should have a CartPayment', () => {
        expect(result.payment).toEqual(jasmine.any(MockCartPayment));
      });

      describe('CartAddress', () => {
        
        it('should have a CartShippingRate', () => {
          expect(result.addresses[0].shipping_rate).toEqual(jasmine.any(MockCartShippingRate));
        });
      });
    });
  });
});
