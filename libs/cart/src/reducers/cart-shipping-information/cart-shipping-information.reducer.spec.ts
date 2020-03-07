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
} from '../../actions';
import { reducer } from './cart-shipping-information.reducer';
import { DaffCartShippingInformation } from '../../models/cart-shipping-info';


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

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartShippingInformationLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingInformationLoadAction = new DaffCartShippingInformationLoad();

      const result = reducer(initialState, cartShippingInformationLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingInformationLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        cart,
        loading: true
      }

      const cartShippingInformationLoadSuccess = new DaffCartShippingInformationLoadSuccess(mockCartShippingInformation);

      result = reducer(state, cartShippingInformationLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set shipping_information from action.payload', () => {
      expect(result.cart.shipping_information).toEqual(mockCartShippingInformation)
    });
  });

  describe('when CartShippingInformationLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartShippingInformationLoadFailure = new DaffCartShippingInformationLoadFailure(error);

      result = reducer(state, cartShippingInformationLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartShippingInformationUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingInformationUpdateAction = new DaffCartShippingInformationUpdate(cart.shipping_information);

      const result = reducer(initialState, cartShippingInformationUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingInformationUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      const cartShippingInformationUpdateActionSuccess = new DaffCartShippingInformationUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, cartShippingInformationUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartShippingInformationUpdateFailure = new DaffCartShippingInformationUpdateFailure(error);

      result = reducer(state, cartShippingInformationUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartShippingInformationDeleteAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: true,
      }
      const cartShippingInformationRemove = new DaffCartShippingInformationDelete();
      const result = reducer(initialState, cartShippingInformationRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartShippingInformationDeleteSuccessAction is triggered', () => {
    it('should remove the shipping information from the cart', () => {
      cart.shipping_information = null;

      const expectedState = {
        ...initialState,
        cart: {
          ...initialState.cart,
          shipping_information: null,
          ...cart
        },
        loading: false
      };
      const cartShippingInformationRemoveSuccess = new DaffCartShippingInformationDeleteSuccess(cart);
      const result = reducer(initialState, cartShippingInformationRemoveSuccess)

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartShippingInformationRemoveFailure = new DaffCartShippingInformationDeleteFailure(error);

      result = reducer(state, cartShippingInformationRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
