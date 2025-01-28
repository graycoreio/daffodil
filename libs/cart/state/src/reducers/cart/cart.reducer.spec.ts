import { TestBed } from '@angular/core/testing';

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
  daffCartReducerInitialState,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartPartialSuccess,
  DaffCartLoadPartialSuccess,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffState } from '@daffodil/core/state';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { cartReducer } from './cart.reducer';

describe('@daffodil/cart/state | cartReducer', () => {
  let cartFactory: DaffCartFactory;
  let error: DaffStateError;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
    error = {
      code: 'error code',
      message: 'error message',
    };
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartReducer(daffCartReducerInitialState, action);

      expect(result).toEqual(daffCartReducerInitialState);
    });
  });

  describe('when CartLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction: DaffCartLoad = new DaffCartLoad();

      const result = cartReducer(daffCartReducerInitialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Resolving);
    });
  });

  describe('when ResolveCartAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartResolveAction: DaffResolveCart = new DaffResolveCart();

      const result = cartReducer(daffCartReducerInitialState, cartResolveAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffCartLoadSuccess(cart);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when CartLoadPartialSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadSuccess = new DaffCartLoadPartialSuccess(cart, [error]);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
      expect(result.errors[DaffCartOperationType.Cart]).toContain(error);
    });
  });

  describe('when ResolveCartSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffResolveCartSuccess(cart);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the cart section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Cart]).toEqual([]);
    });
  });

  describe('when ResolveCartPartialSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadSuccess = new DaffResolveCartPartialSuccess(cart, [error]);

      result = cartReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
      expect(result.errors[DaffCartOperationType.Cart]).toContain(error);
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffCartLoadFailure([error]);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
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
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffResolveCartFailure([error]);

      result = cartReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
      expect(result.errors[DaffCartOperationType.Cart]).toContain(error);
    });
  });

  describe('when CartStorageFailure is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartStorageFailure = new DaffCartStorageFailure([daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'))]);

      result = cartReducer(state, cartStorageFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when CartCreateAction is triggered', () => {
    it('should indicate that the cart is being mutated', () => {
      const cartCreateAction: DaffCartCreate = new DaffCartCreate();

      const result = cartReducer(daffCartReducerInitialState, cartCreateAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        cart: cartFactory.create(),
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      const cartCreateSuccess = new DaffCartCreateSuccess({ id: cart.id });

      result = cartReducer(state, cartCreateSuccess);
    });

    it('should set the cart to initial state plus the payload cart id', () => {
      expect(result.cart).toEqual({
        ...daffCartReducerInitialState.cart,
        id: cart.id,
      });
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
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
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartCreateFailure = new DaffCartCreateFailure([error]);

      result = cartReducer(state, cartCreateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
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

      const result = cartReducer(daffCartReducerInitialState, addToCartAction);

      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Updating);
    });
  });

  describe('when AddToCartActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const addToCartActionSuccess: DaffAddToCartSuccess = new DaffAddToCartSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
      };

      result = cartReducer(state, addToCartActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
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
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const addToCartFailure = new DaffAddToCartFailure([error]);

      result = cartReducer(state, addToCartFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });

  describe('when CartClearAction is triggered', () => {
    it('should indicate that the cart is being mutated', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Updating,
        },
      };
      const cartClear = new DaffCartClear();
      const result = cartReducer(daffCartReducerInitialState, cartClear);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const cartClearSuccess = new DaffCartClearSuccess(cart);
      result = cartReducer(daffCartReducerInitialState, cartClearSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
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
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Cart]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Cart]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartClearFailure = new DaffCartClearFailure([error]);

      result = cartReducer(state, cartClearFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Cart]).toEqual(DaffState.Stable);
    });

    it('should add an error to the cart section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Cart].length).toEqual(2);
    });
  });
});
