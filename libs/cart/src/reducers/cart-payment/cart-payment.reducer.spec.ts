import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartPaymentLoad,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
	DaffCartPaymentMethodAdd
} from '../../actions/public_api';
import { cartPaymentReducer } from './cart-payment.reducer';
import { DaffCartErrorType } from '../errors/cart-error-type.enum';

describe('Cart | Reducer | Cart Payment', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = cartPaymentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartPaymentLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartPaymentLoad();

      const result = cartPaymentReducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPaymentLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartListLoadSuccess = new DaffCartPaymentLoadSuccess(cart.payment);

      result = cartPaymentReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set payment from action.payload', () => {
      expect(result.cart.payment).toEqual(cart.payment)
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Payment]: new Array('firstError')
        }
      }

      const cartListLoadFailure = new DaffCartPaymentLoadFailure(error);

      result = cartPaymentReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartPaymentUpdateAction = new DaffCartPaymentUpdate(cart.payment);

      const result = cartPaymentReducer(initialState, cartPaymentUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPaymentUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartPaymentUpdateActionSuccess = new DaffCartPaymentUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = cartPaymentReducer(state, cartPaymentUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Payment]: new Array('firstError')
        }
      }

      error = 'error';

      const cartPaymentUpdateFailure = new DaffCartPaymentUpdateFailure(error);

      result = cartPaymentReducer(state, cartPaymentUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentRemoveAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        ...initialState,
        loading: true,
      }
      const cartPaymentRemove = new DaffCartPaymentRemove();
      const result = cartPaymentReducer(initialState, cartPaymentRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartPaymentRemoveSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      cart.payment = null;
      const cartPaymentRemoveSuccess = new DaffCartPaymentRemoveSuccess();

      result = cartPaymentReducer(initialState, cartPaymentRemoveSuccess);
    });

    it('should remove the payment from the cart', () => {
      expect(result.cart.payment).toBeNull();
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentRemoveFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.Payment]: new Array('firstError')
        }
      }

      error = 'error';

      const cartPaymentRemoveFailure = new DaffCartPaymentRemoveFailure(error);

      result = cartPaymentReducer(state, cartPaymentRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentMethodAddAction is triggered', () => {
    let result;
		let state: DaffCartReducerState<DaffCart>;
		const stubPayment = {
			method: 'method',
			payment_info: 'payment info object'
		}

    beforeEach(() => {
      state = {
        ...initialState
      }

      const cartPaymentMethodAdd = new DaffCartPaymentMethodAdd(stubPayment);

      result = cartPaymentReducer(state, cartPaymentMethodAdd);
    });

    it('should set the cart payment method from action.payload', () => {
      expect(result.cart.payment).toEqual(stubPayment);
    });
  });
});
