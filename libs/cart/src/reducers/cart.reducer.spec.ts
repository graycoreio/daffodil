import { DaffCartFactory } from '../../testing/src/factories/cart.factory';
import { initialState, reducer, getCartLoading, getCart, State } from "../reducers/cart.reducer";
import { DaffCartLoad, DaffCartLoadSuccess, DaffCartLoadFailure, DaffCartReset, DaffAddToCart, DaffAddToCartSuccess, DaffAddToCartFailure } from "../actions/cart.actions";
import { DaffCart } from '../models/cart';

describe('Cart | Cart List Reducer', () => {

  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

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
      const cartListLoadAction: DaffCartLoad = new DaffCartLoad();
      
      const result = reducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }
  
      const cartListLoadSuccess = new DaffCartLoadSuccess(cart);
      
      result = reducer(state, cartListLoadSuccess);
    });

    it('sets cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: State;

    beforeEach(() => {
       state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
       }
      
      const cartListLoadFailure = new DaffCartLoadFailure(error);

      result = reducer(state, cartListLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when AddToCartAction is triggered', () => {

    const productId = 'productId';
    const qty = 1;
    
    it('sets loading state to true', () => {
      const addToCartAction: DaffAddToCart = new DaffAddToCart({productId, qty});
      
      const result = reducer(initialState, addToCartAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {

    let result;
    let state: State;


    beforeEach(() => {
      const addToCartActionSuccess: DaffAddToCartSuccess = new DaffAddToCartSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, addToCartActionSuccess);
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
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
       }

      error = 'error';      

      const addToCartFailure = new DaffAddToCartFailure(error);

      result = reducer(state, addToCartFailure);
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
      const expectedState = {
        loading: false,
        cart: null,
        errors: []
      }
      const cartReset = new DaffCartReset();
      const result = reducer(initialState, cartReset);
      
      expect(result).toEqual(expectedState);
    });
  });
});
