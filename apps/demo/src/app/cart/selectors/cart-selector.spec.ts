import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffCoreTestingModule } from "@daffodil/core/testing";
import { DaffCartFactory, DaffCartItemFactory } from "@daffodil/core/testing";
import { CartReset, CartLoadSuccess, Cart } from "@daffodil/cart";

import * as fromCart from './cart-selector';

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
