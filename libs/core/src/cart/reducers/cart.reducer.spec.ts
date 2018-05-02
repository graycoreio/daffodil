import { createSelector } from "@ngrx/store";

import { Cart } from "../model/cart";
import { CartFactory } from "../testing/factories/cart.factory";
import { initialState, reducer, getCartLoading } from "../reducers/cart.reducer";
import { CartLoad, CartLoadSuccess, CartLoadFailure } from "../actions/cart.actions";


describe('Cart | Cart List Reducer', () => {

  let cartFactory;
  let cart: Cart;

  beforeEach(() => {
    cartFactory = new CartFactory();

    cart = cartFactory.create('cost');
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

    let cart: Cart;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      cart = cart;
      let cartListLoadSuccess = new CartLoadSuccess(cart);
      
      result = reducer(initialState, cartListLoadSuccess);
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

  describe('getCartLoading', () => {
    
    it('returns loading state', () => {
      expect(getCartLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
