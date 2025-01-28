import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartShippingMethodsLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { cartShippingMethodsReducer } from './cart-shipping-methods.reducer';

describe('@daffodil/cart/state | cartShippingMethodsReducer', () => {
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;
  let cart: DaffCart;
  let mockCartShippingRate: DaffCartShippingRate;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    cart = cartFactory.create();
    mockCartShippingRate = cartShippingRateFactory.create();

    cart.available_shipping_methods = [mockCartShippingRate];
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = cartShippingMethodsReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartShippingMethodsLoadAction is triggered', () => {

    it('should set loading state to true', () => {
      const cartShippingMethodsLoadAction = new DaffCartShippingMethodsLoad();
      const result = cartShippingMethodsReducer(daffCartReducerInitialState, cartShippingMethodsLoadAction);

      expect(result.loading[DaffCartOperationType.ShippingMethods]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartShippingMethodsLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingMethods]: DaffState.Resolving,
        },
      };

      const cartShippingMethodsLoadSuccess = new DaffCartShippingMethodsLoadSuccess(cart.available_shipping_methods);

      result = cartShippingMethodsReducer(state, cartShippingMethodsLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingMethods]).toEqual(DaffState.Stable);
    });

    it('should set available_shipping_methods from action.payload', () => {
      expect(result.cart.available_shipping_methods).toEqual(cart.available_shipping_methods);
    });

    it('should reset the errors in the shipping methods section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingMethods]).toEqual([]);
    });
  });

  describe('when CartShippingMethodsLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingMethods]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingMethods]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartShippingMethodsLoadFailure = new DaffCartShippingMethodsLoadFailure([error]);

      result = cartShippingMethodsReducer(state, cartShippingMethodsLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingMethods]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping methods section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingMethods].length).toEqual(2);
    });
  });
});
