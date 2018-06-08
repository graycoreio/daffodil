import { TestBed } from '@angular/core/testing';

import { 
  CartFactory, 
  MockCart, 
  MockCartItem, 
  MockCartAddress, 
  MockCartPayment, 
  MockCartShippingRate 
} from './cart.factory';

describe('Core | Cart | Testing | CartFactory', () => {
  
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

  describe('addCartItemToCart', () => {

    let givenId;
    let givenQty;
    let result;

    beforeEach(() => {
      result = cartFactory.addCartItemToCart({productId: givenId, qty: givenQty})
    });
    
    it('should add a cartItem to the cart', () => {
      expect(result.items[0]).toEqual(jasmine.any(MockCartItem));
    });

    it('should set the id of the cartItem to the id of the parameter', () => {
      expect(result.items[0].id).toEqual(givenId);
    });

    it('should set the qty of the cartItem to the id of the parameter', () => {
      expect(result.items[0].qty).toEqual(givenQty);
    });
  });
});
