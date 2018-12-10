import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { CartLoadSuccess, CartReset } from "../actions/cart.actions";
import * as fromCart from './index';

import { Cart } from "@daffodil/core";
import { DaffCartFactory } from "@daffodil/core/testing";

describe('selectCartState', () => {

  let store: Store<fromCart.CartState>;
  let cartFactory: DaffCartFactory = new DaffCartFactory();
  let mockCart: Cart;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(fromCart.reducers),
        })
      ]
    });

    mockCart = cartFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new CartReset());
    store.dispatch(new CartLoadSuccess(mockCart));
  }));

  describe('cartStateSelector', () => {
    
    it('selects cart state', () => {
      let expectedCartState = {
        cart: mockCart,
        loading: false,
        errors: []
      }

      store.pipe(select(fromCart.cartStateSelector)).subscribe((cart) => {
        expect(cart).toEqual(expectedCartState);
      });
    });
  });

  describe('selectCartValueState', () => {
    
    it('selects cartValue state', () => {
      store.pipe(select(fromCart.selectCartValueState)).subscribe((cart) => {
        expect(cart).toEqual(mockCart);
      });
    });
  });

  describe('selectCartLoadingState', () => {
    
    it('selects cart loading state', () => {
      store.pipe(select(fromCart.selectCartLoadingState)).subscribe((cartLoading) => {
        expect(cartLoading).toEqual(false);
      });
    });
  });
});
