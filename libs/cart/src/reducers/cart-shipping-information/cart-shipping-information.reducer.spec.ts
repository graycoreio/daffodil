import { DaffLoadingState } from '@daffodil/core/state';
import { DaffCart } from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure
} from '../../actions/public_api';
import { cartShippingInformationReducer } from './cart-shipping-information.reducer';
import { DaffCartShippingInformation } from '../../models/cart-shipping-info';
import { DaffCartOperationType } from '../cart-operation-type.enum';

describe('Cart | Reducer | Cart Shipping Information', () => {
  let cartFactory: DaffCartFactory;
  let cartShippingInformationFactory: DaffCartShippingRateFactory;
  let cart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingInformation;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();
    cartShippingInformationFactory = new DaffCartShippingRateFactory();

    cart = cartFactory.create();
    mockCartShippingInformation = {
      ...cartShippingInformationFactory.create(),
      address_id: null
    };
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = cartShippingInformationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

      const result = cartShippingInformationReducer(initialState, cartShippingInformationLoadAction);

      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Resolving);
    });
  });

  describe('when CartShippingInformationLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        cart,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Resolving
        }
      }

      const cartShippingInformationLoadSuccess = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Complete);
    });

    it('should set shipping_information from action.payload', () => {
      expect(result.cart.shipping_information).toEqual(mockCartShippingInformation)
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingInformation]: new Array('firstError')
        }
      }

      const cartShippingInformationLoadFailure = new DaffCartShippingInformationLoadFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    it('should set loading state to Mutating', () => {
      const cartShippingInformationUpdateAction = new DaffCartShippingInformationUpdate(cart.shipping_information);

      const result = cartShippingInformationReducer(initialState, cartShippingInformationUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartShippingInformationUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartShippingInformationUpdateActionSuccess = new DaffCartShippingInformationUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Resolving
        }
      }

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingInformation]: new Array('firstError')
        }
      }

      error = 'error';

      const cartShippingInformationUpdateFailure = new DaffCartShippingInformationUpdateFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    it('should indicate that the cart shipping information is being mutated', () => {
      const expectedState = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Mutating
        },
      }
      const cartShippingInformationRemove = new DaffCartShippingInformationDelete();
      const result = cartShippingInformationReducer(initialState, cartShippingInformationRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartShippingInformationDeleteSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      cart.shipping_information = null;
      const cartShippingInformationRemoveSuccess = new DaffCartShippingInformationDeleteSuccess(cart);
      result = cartShippingInformationReducer(initialState, cartShippingInformationRemoveSuccess);
    });
    it('should remove the shipping information from the cart', () => {

      const expectedState = {
        ...initialState,
        cart: {
          ...initialState.cart,
          shipping_information: null,
          ...cart
        },
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Complete
        }
      };

      expect(result).toEqual(expectedState);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingInformation]: new Array('firstError')
        }
      }

      error = 'error';

      const cartShippingInformationRemoveFailure = new DaffCartShippingInformationDeleteFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingInformation]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingInformation].length).toEqual(2);
    });
  });
});
