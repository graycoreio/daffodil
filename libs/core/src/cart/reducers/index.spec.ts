import { NgModule } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromCart from './index';
import { CartLoadSuccess } from "../actions/cart.actions";
import { CartFactory } from "../testing/factories/cart.factory";
import { Cart } from "../model/cart";

describe('selectCartState', () => {

  let store: Store<fromCart.CartState>;
  let cartFactory: CartFactory = new CartFactory();
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
    store.dispatch(new CartLoadSuccess(mockCart));
  }));

  describe('selectCartIds', () => {
    
    it('selects cart ids', () => {
      store.pipe(select(fromCart.selectCartIds)).subscribe((ids) => {
        expect(ids).toEqual(new Array(mockCart.id));
      });
    });
  });

  describe('selectCartEntities', () => {
    
    it('selects cart entities as a dictionary object', () => {
      store.pipe(select(fromCart.selectCartEntities)).subscribe((carts) => {
        expect(carts[mockCart.id]).toEqual(mockCart);
      });
    });
  });

  describe('selectAllCarts', () => {
    
    it('selects all carts as an array', () => {
      store.pipe(select(fromCart.selectAllCarts)).subscribe((carts) => {
        expect(carts[0]).toEqual(mockCart);
      });
    });
  });

  describe('selectTotalCarts', () => {
    
    it('selects the total number of carts', () => {
      store.pipe(select(fromCart.selectTotalCarts)).subscribe((numberOfCarts) => {
        expect(numberOfCarts).toEqual(1);
      });
    });
  });

  describe('cartLoadingStateSelector', () => {
    
    it('selects cart state', () => {
      let expectedCartState = {
        cart: null,
        loading: false,
        errors: []
      }

      store.pipe(select(fromCart.cartLoadingStateSelector)).subscribe((cart) => {
        console.log(cart);
        expect(cart).toEqual(expectedCartState);
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
