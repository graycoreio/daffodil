
import { DaffCart } from '@daffodil/cart';
import {
  DaffCartLoad,
  DaffCartOperationType,
  DaffResolveCart,
  DaffCartReducerState,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffCartStorageFailure,
  DaffCartCreate,
  DaffCartCreateSuccess,
  DaffCartCreateFailure,
  DaffAddToCart,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffCartClear,
  DaffCartClearSuccess,
  DaffCartClearFailure,
  initialState,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartServerSide,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffState } from '@daffodil/core/state';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { cartReducer } from './cart.reducer';

describe('Cart | Reducer | Cart', () => {
  let cartFactory: DaffCartFactory;
  let error: DaffStateError;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
    error = {
      code: 'error code',
      message: 'error message',
    };
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction: DaffCartLoad = new DaffCartLoad();

      const result = cartReducer(initialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Resolving);
    });
  });

  describe('when ResolveCartAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartResolveAction: DaffResolveCart = new DaffResolveCart();

      const result = cartReducer(initialState, cartResolveAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffCartLoadSuccess(cart);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when ResolveCartSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffResolveCartSuccess(cart);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffCartLoadFailure(error);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when ResolveCartFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffResolveCartFailure(error);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when ResolveCartServerSideAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffResolveCartServerSide(error);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when CartStorageFailure is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartStorageFailure = new DaffCartStorageFailure(daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.')));

      result = cartReducer(state, cartStorageFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when CartCreateAction is triggered', () => {
    it('should indicate that the cart is being mutated', () => {
      const cartCreateAction: DaffCartCreate = new DaffCartCreate();

      const result = cartReducer(initialState, cartCreateAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Mutating);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        cart: cartFactory.create(),
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartCreateSuccess = new DaffCartCreateSuccess({ id: cart.id });

      result = cartReducer(state, cartCreateSuccess);
    });

    it('should set the cart to initial state plus the payload cart id', () => {
      expect(result.cart).toEqual({
        ...initialState.cart,
        id: cart.id,
      });
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when CartCreateFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartCreateFailure = new DaffCartCreateFailure(error);

      result = cartReducer(state, cartCreateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when AddToCartAction is triggered', () => {
    const productId = 'productId';
    const qty = 1;

    it('should indicate that the cart is being mutated', () => {
      const addToCartAction: DaffAddToCart = new DaffAddToCart({ productId, qty });

      const result = cartReducer(initialState, addToCartAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Mutating);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const addToCartActionSuccess: DaffAddToCartSuccess = new DaffAddToCartSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      result = cartReducer(state, addToCartActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when AddToCartFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const addToCartFailure = new DaffAddToCartFailure(error);

      result = cartReducer(state, addToCartFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when CartClearAction is triggered', () => {
    it('should indicate that the cart is being mutated', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Mutating,
        },
      };
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
          ...cart,
        },
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Complete,
        },
      };

      expect(result).toEqual(expectedState);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when CartClearFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartClearFailure = new DaffCartClearFailure(error);

      result = cartReducer(state, cartClearFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Complete);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });
});
