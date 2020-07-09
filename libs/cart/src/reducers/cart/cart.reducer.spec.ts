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
  DaffCartCreateFailure,
  DaffResolveCart,
  DaffCartStorageFailure
} from '../../actions/public_api';
import { DaffCart } from '../../models/cart';
import { cartReducer } from './cart.reducer';
import { DaffCartReducerState } from '../cart-state.interface';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';


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

      const result = cartReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction: DaffCartLoad = new DaffCartLoad();

      const result = cartReducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when ResolveCartAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartResolveAction: DaffResolveCart = new DaffResolveCart();

      const result = cartReducer(initialState, cartResolveAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartListLoadSuccess = new DaffCartLoadSuccess(cart);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Cart]).toEqual([]);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Cart]: new Array('firstError')
        }
      }

      const cartListLoadFailure = new DaffCartLoadFailure(error);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Cart].length).toEqual(2);
    });
  });

  describe('when CartStorageFailure is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Cart]: new Array('firstError')
        }
      }

      const cartStorageFailure = new DaffCartStorageFailure();

      result = cartReducer(state, cartStorageFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Cart].length).toEqual(2);
    });
  });

  describe('when CartCreateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartCreateAction: DaffCartCreate = new DaffCartCreate();

      const result = cartReducer(initialState, cartCreateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartCreateSuccess = new DaffCartCreateSuccess({id: cart.id});

      result = cartReducer(state, cartCreateSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart.id).toEqual(cart.id)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Cart]).toEqual([]);
    });
  });

  describe('when CartCreateFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Cart]: new Array('firstError')
        }
      }

      const cartCreateFailure = new DaffCartCreateFailure(error);

      result = cartReducer(state, cartCreateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Cart].length).toEqual(2);
    });
  });

  describe('when AddToCartAction is triggered', () => {
    const productId = 'productId';
    const qty = 1;

    it('should set loading state to true', () => {
      const addToCartAction: DaffAddToCart = new DaffAddToCart({ productId, qty });

      const result = cartReducer(initialState, addToCartAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const addToCartActionSuccess: DaffAddToCartSuccess = new DaffAddToCartSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = cartReducer(state, addToCartActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Cart]).toEqual([]);
    });
  });

  describe('when AddToCartFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Cart]: new Array('firstError')
        }
      }

      error = 'error';

      const addToCartFailure = new DaffAddToCartFailure(error);

      result = cartReducer(state, addToCartFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Cart].length).toEqual(2);
    });
  });

  describe('when CartClearAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: true,
      }
      const cartClear = new DaffCartClear();
      const result = cartReducer(initialState, cartClear);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const cartClearSuccess = new DaffCartClearSuccess(cart);
      result = cartReducer(initialState, cartClearSuccess);
    });

    it('should set the cart payload on state', () => {
      const expectedState = {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: [],
          ...cart
        },
        loading: false
      }

      expect(result).toEqual(expectedState);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Cart]).toEqual([]);
    });
  });

  describe('when CartClearFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Cart]: new Array('firstError')
        }
      }

      error = 'error';

      const cartClearFailure = new DaffCartClearFailure(error);

      result = cartReducer(state, cartClearFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Cart].length).toEqual(2);
    });
  });
});
