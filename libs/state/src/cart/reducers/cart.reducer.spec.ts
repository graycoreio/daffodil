import { createSelector } from "@ngrx/store";

import { Cart } from "../model/cart";
import { CartFactory } from "../testing/factories/cart.factory";
import { initialState, reducer, getCartLoading, getCart } from "../reducers/cart.reducer";
import { CartLoad, CartLoadSuccess, CartLoadFailure, CartReset, AddToCart, AddToCartSuccess, AddToCartFailure } from "../actions/cart.actions";
import { Product } from "../..";


describe('Cart | Cart List Reducer', () => {

  let cartFactory;
  let cart: Cart;

  beforeEach(() => {
    cartFactory = new CartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const cartListLoadAction: CartLoad = new CartLoad();
      
      const result = reducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let result;

    beforeEach(() => {
      initialState.loading = true;
      let cartListLoadSuccess = new CartLoadSuccess(cart);
      
      result = reducer(initialState, cartListLoadSuccess);
    });

    it('sets cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let cartListLoadFailure = new CartLoadFailure(error);

      result = reducer(initialState, cartListLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when AddToCartAction is triggered', () => {

    let productId: string;
    let qty: number;
    
    it('sets loading state to true', () => {
      const addToCartAction: AddToCart = new AddToCart({productId, qty});
      
      const result = reducer(initialState, addToCartAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {

    let cart: Cart;
    let result;

    beforeEach(() => {
      const addToCartActionSuccess: AddToCartSuccess = new AddToCartSuccess(cart);
      initialState.loading = true;

      result = reducer(initialState, addToCartActionSuccess);
    });

    it('sets cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });
    
    it('sets loading state to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when AddToCartFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let addToCartFailure = new AddToCartFailure(error);

      result = reducer(initialState, addToCartFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getCart', () => {
    
    it('returns cart state', () => {
      expect(getCart(initialState)).toEqual(initialState.cart);
    });
  });

  describe('getCartLoading', () => {
    
    it('returns loading state', () => {
      expect(getCartLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('CartReset', () => {
    
    it('resets state to initialState', () => {
      let expectedState = {
        loading: false,
        cart: null,
        errors: []
      }
      let cartReset = new CartReset();
      let result = reducer(initialState, cartReset);
      
      expect(result).toEqual(expectedState);
    });
  });
});
