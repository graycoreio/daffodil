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
import { DaffCartErrorType } from '../errors/cart-error-type.enum';

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

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingInformationLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        cart,
        loading: true
      }

      const cartShippingInformationLoadSuccess = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set shipping_information from action.payload', () => {
      expect(result.cart.shipping_information).toEqual(mockCartShippingInformation)
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.ShippingInformation]: new Array('firstError')
        }
      }

      const cartShippingInformationLoadFailure = new DaffCartShippingInformationLoadFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingInformationUpdateAction = new DaffCartShippingInformationUpdate(cart.shipping_information);

      const result = cartShippingInformationReducer(initialState, cartShippingInformationUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingInformationUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartShippingInformationUpdateActionSuccess = new DaffCartShippingInformationUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.ShippingInformation]: new Array('firstError')
        }
      }

      error = 'error';

      const cartShippingInformationUpdateFailure = new DaffCartShippingInformationUpdateFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation].length).toEqual(2);
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: true,
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
        loading: false
      };

      expect(result).toEqual(expectedState);
    });

    it('should reset the errors in the shipping information section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation]).toEqual([]);
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.ShippingInformation]: new Array('firstError')
        }
      }

      error = 'error';

      const cartShippingInformationRemoveFailure = new DaffCartShippingInformationDeleteFailure(error);

      result = cartShippingInformationReducer(state, cartShippingInformationRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the shipping information section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.ShippingInformation].length).toEqual(2);
    });
  });
});
