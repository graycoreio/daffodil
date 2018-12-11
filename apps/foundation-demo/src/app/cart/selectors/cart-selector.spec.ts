import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromCart from './cart-selector';

import { 
  Cart, 
  DaffCartFactory,
  DaffCartItemFactory, 
  DaffCoreTestingModule,
  CartReset, 
  CartLoadSuccess
} from "@daffodil/cart";

describe('selectCartState', () => {

  let store: Store<fromCart.CartState>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let mockCart: Cart;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule,
        StoreModule.forRoot({
          cart: combineReducers(fromCart.reducers),
        })
      ]
    });

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    store = TestBed.get(Store);
  }));

  describe('cartHasOneItem', () => {
    describe('when there is one type of cartItem in the cart', () => {
      beforeEach(() => {        
        mockCart = cartFactory.create({
          items: [cartItemFactory.createMany()]
        });
      });
      
      describe('and the qty is one', () => {
        beforeEach(() => {
          mockCart.items[0].qty = 1;
          store.dispatch(new CartReset());
          store.dispatch(new CartLoadSuccess(mockCart));
        });
        
        it('should return true', () => {
          store.pipe(select(fromCart.cartHasOneItem)).subscribe(bool => {
            expect(bool).toBeTruthy();
          });
        });
      });

      describe('and the qty is not one', () => {

        beforeEach(() => {
          mockCart.items[0].qty = 2;
          store.dispatch(new CartReset());
          store.dispatch(new CartLoadSuccess(mockCart));
        });
        
        it('should return false', () => {
          store.pipe(select(fromCart.cartHasOneItem)).subscribe(bool => {
            expect(bool).toBeFalsy();
          });
        });
      });
    });

    describe('when there is not one type of cartItem in the cart', () => {
      
      beforeEach(() => {        
        mockCart = cartFactory.create({
          items: cartItemFactory.createMany(2)
        });
        store.dispatch(new CartReset());
        store.dispatch(new CartLoadSuccess(mockCart));
      });

      it('should return false', () => {
        store.pipe(select(fromCart.cartHasOneItem)).subscribe(bool => {
          expect(bool).toBeFalsy();;
        });
      });
    });
  });

  describe('selectCartItemCount', () => {

    beforeEach(() => {
      mockCart = cartFactory.create({
        items: cartItemFactory.createMany(2)
      });

      mockCart.items[0].qty = 2;
      mockCart.items[1].qty = 4;
      
      store.dispatch(new CartReset());
      store.dispatch(new CartLoadSuccess(mockCart));
    });
    
    it('selects total number of cartItems', () => {
      store.pipe(select(fromCart.selectCartItemCount)).subscribe((count) => {
        expect(count).toEqual(6);
      });
    });
  });

  describe('isCartEmpty', () => {

    describe('when cart is empty', () => {

      beforeEach(() => {
        mockCart = cartFactory.create();
        store.dispatch(new CartReset());        
        store.dispatch(new CartLoadSuccess(mockCart));
      });
      
      it('should return true', () => {
        store.pipe(select(fromCart.isCartEmpty)).subscribe((isCartEmpty) => {
          expect(isCartEmpty).toBeTruthy();
        });
      });
    });

    describe('when cart is not empty', () => {
      
      beforeEach(() => {
        mockCart = cartFactory.create({
          items: cartItemFactory.createMany(2)
        });
        store.dispatch(new CartReset());
        store.dispatch(new CartLoadSuccess(mockCart));
      });

      it('should return false', () => {
        store.pipe(select(fromCart.isCartEmpty)).subscribe((isCartEmpty) => {
          expect(isCartEmpty).toBeFalsy();
        });
      });
    });
  });
});
