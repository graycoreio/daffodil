import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartShippingInformationLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
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

import { cartShippingInformationReducer } from './cart-shipping-information.reducer';

describe('@daffodil/cart/state | cartShippingInformationReducer', () => {
  let cartFactory: DaffCartFactory;
  let cartShippingInformationFactory: DaffCartShippingRateFactory;
  let cart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingRate;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingInformationFactory = new DaffCartShippingRateFactory();

    cart = cartFactory.create();
    mockCartShippingInformation = cartShippingInformationFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartShippingInformationReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

      const result = cartShippingInformationReducer(daffCartReducerInitialState, cartShippingInformationLoadAction);

      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartShippingInformationLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        cart,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Resolving,
        },
      };

      const cartShippingInformationLoadSuccess = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Stable);
    });

    it('should set shipping_information from action.payload', () => {
      expect(result.cart.shipping_information).toEqual(mockCartShippingInformation);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingInformation]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartShippingInformationLoadFailure = new DaffCartShippingInformationLoadFailure([error]);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    it('should set loading state to Mutating', () => {
      const cartShippingInformationUpdateAction = new DaffCartShippingInformationUpdate(cart.shipping_information);

      const result = cartShippingInformationReducer(daffCartReducerInitialState, cartShippingInformationUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartShippingInformationUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartShippingInformationUpdateActionSuccess = new DaffCartShippingInformationUpdateSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Resolving,
        },
      };

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingInformation]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartShippingInformationUpdateFailure = new DaffCartShippingInformationUpdateFailure([error]);

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    it('should indicate that the cart shipping information is being mutated', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Updating,
        },
      };
      const cartShippingInformationRemove = new DaffCartShippingInformationDelete();
      const result = cartShippingInformationReducer(daffCartReducerInitialState, cartShippingInformationRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartShippingInformationDeleteSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      cart.shipping_information = null;
      const cartShippingInformationRemoveSuccess = new DaffCartShippingInformationDeleteSuccess(cart);
      result = cartShippingInformationReducer(daffCartReducerInitialState, cartShippingInformationRemoveSuccess);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingInformation]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartShippingInformationRemoveFailure = new DaffCartShippingInformationDeleteFailure([error]);

      result = cartShippingInformationReducer(state, cartShippingInformationRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });
});
