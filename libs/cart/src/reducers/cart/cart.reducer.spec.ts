import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import {
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffAddToCart,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffCartClear,
  DaffCartClearSuccess,
  DaffCartClearFailure,
  DaffCartCreate,
  DaffCartCreateSuccess,
  DaffCartCreateFailure
} from '../../actions';
import { DaffCart } from '../../models/cart';
import { reducer } from './cart.reducer';
import { CartState } from '../cart-state.interface';


describe('Cart | Reducer | Cart', () => {
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

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartLoadAction is triggered', () => {
    it('should setloading state to true', () => {
      const cartListLoadAction: DaffCartLoad = new DaffCartLoad();

      const result = reducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartListLoadSuccess = new DaffCartLoadSuccess(cart);

      result = reducer(state, cartListLoadSuccess);
    });

    it('should setcart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartListLoadFailure = new DaffCartLoadFailure(error);

      result = reducer(state, cartListLoadFailure);
    });

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartCreateAction is triggered', () => {
    it('should setloading state to true', () => {
      const cartCreateAction: DaffCartCreate = new DaffCartCreate();

      const result = reducer(initialState, cartCreateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartCreateSuccess = new DaffCartCreateSuccess({id: cart.id});

      result = reducer(state, cartCreateSuccess);
    });

    it('should setcart from action.payload', () => {
      expect(result.cart.id).toEqual(cart.id)
    });

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartCreateFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartCreateFailure = new DaffCartCreateFailure(error);

      result = reducer(state, cartCreateFailure);
    });

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when AddToCartAction is triggered', () => {
    const productId = 'productId';
    const qty = 1;

    it('should setloading state to true', () => {
      const addToCartAction: DaffAddToCart = new DaffAddToCart({ productId, qty });

      const result = reducer(initialState, addToCartAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      const addToCartActionSuccess: DaffAddToCartSuccess = new DaffAddToCartSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, addToCartActionSuccess);
    });

    it('should setcart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should setloading state to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when AddToCartFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

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

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartClearAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        loading: true,
        cart: null,
        errors: []
      }
      const cartReset = new DaffCartClear();
      const result = reducer(initialState, cartReset);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {
    it('should guarantee there are no items in the cart', () => {
      const expectedState = {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: [],
          ...cart
        },
        loading: false
      }
      const cartResetSuccess = new DaffCartClearSuccess(cart);
      const result = reducer(initialState, cartResetSuccess)

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartClearFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartResetFailure = new DaffCartClearFailure(error);

      result = reducer(state, cartResetFailure);
    });

    it('should setloading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
