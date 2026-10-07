import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffAddToCartSuccess,
  DaffCartBillingAddressActionTypes,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressActionTypes,
  DaffCartAddressActionTypes,
  DaffCartAddressUpdateSuccess,
  DaffCartCouponApplySuccess,
  DaffCartCouponActionTypes,
  DaffCartCouponRemoveSuccess,
  DaffCartCouponRemoveAllSuccess,
  DaffCartItemUpdateSuccess,
  DaffCartItemActionTypes,
  DaffCartItemAddSuccess,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteOutOfStockSuccess,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentActionTypes,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationActionTypes,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartActionTypes,
  DaffCartClearSuccess,
  DaffCartCreateSuccess,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffCheckoutOrderReducerState,
  daffCheckoutOrderInitialState as initialState,
  DaffCheckoutPlaceOrder,
  DaffCheckoutPlaceOrderFailure,
  DaffCheckoutPlaceOrderFailureFromOutOfStockProduct,
  DaffCheckoutPlaceOrderSuccess,
} from '@daffodil/checkout/state';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

import { daffCheckoutOrderReducer as reducer } from './reducer';

describe('@daffodil/checkout/state | daffCheckoutOrderReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};
      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartPlaceOrderAction is triggered', () => {
    it('should indicate that the place order operation is in progress', () => {
      const cartPlaceOrderAction = new DaffCheckoutPlaceOrder();

      const result = reducer(initialState, cartPlaceOrderAction);

      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CartPlaceOrderSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;
    let orderId: DaffOrder['id'];
    let cartId: DaffCart['id'];

    beforeEach(() => {
      orderId = 'orderId';
      cartId = 'cartId';
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const cartPlaceOrderSuccess = new DaffCheckoutPlaceOrderSuccess({
        orderId,
        cartId,
      });

      result = reducer(state, cartPlaceOrderSuccess);
    });

    it('should set the order result from action.payload', () => {
      expect(result.orderResult.orderId).toEqual(orderId);
      expect(result.orderResult.cartId).toEqual(cartId);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          ...initialState.daffErrors,
          error,
        ],
      };

      const cartPlaceOrderFailure = new DaffCheckoutPlaceOrderFailure([error]);

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation was an error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });

    it('should set the action daffErrors in state', () => {
      expect(result.daffErrors).toEqual([error]);
    });
  });

  describe('when CartPlaceOrderFailureFromOutOfStockProductAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          ...initialState.daffErrors,
          error,
        ],
      };

      const cartPlaceOrderFailure = new DaffCheckoutPlaceOrderFailureFromOutOfStockProduct([error], TestBed.inject(DaffCartFactory).create());

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation was an error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });

    it('should set the action daffErrors in state', () => {
      expect(result.daffErrors).toEqual([error]);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartClearSuccess>{
        type: DaffCartActionTypes.CartClearSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartCreateSuccess>{
        type: DaffCartActionTypes.CartCreateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when AddToCartSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffAddToCartSuccess>{
        type: DaffCartActionTypes.AddToCartSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartBillingAddressUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartBillingAddressUpdateSuccess>{
        type: DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartShippingAddressUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartShippingAddressUpdateSuccess>{
        type: DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartAddressUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartAddressUpdateSuccess>{
        type: DaffCartAddressActionTypes.CartAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartCouponApplySuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartCouponApplySuccess>{
        type: DaffCartCouponActionTypes.CartCouponApplySuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartCouponRemoveSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartCouponRemoveSuccess>{
        type: DaffCartCouponActionTypes.CartCouponRemoveSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartCouponRemoveAllSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartCouponRemoveAllSuccess>{
        type: DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartItemUpdateSuccess>{
        type: DaffCartItemActionTypes.CartItemUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartItemAddSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartItemAddSuccess>{
        type: DaffCartItemActionTypes.CartItemAddSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartItemDeleteSuccess>{
        type: DaffCartItemActionTypes.CartItemDeleteSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartItemDeleteOutOfStockSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartItemDeleteOutOfStockSuccess>{
        type: DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartPaymentRemoveSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartPaymentRemoveSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartPaymentUpdateSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateWithBillingSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartPaymentUpdateWithBillingSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartShippingInformationUpdateSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartShippingInformationUpdateSuccess>{
        type: DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartShippingInformationDeleteSuccessAction is triggered', () => {
    let result: DaffCheckoutOrderReducerState;
    let state: DaffCheckoutOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
      };

      const action = <DaffCartShippingInformationDeleteSuccess>{
        type: DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the daffErrors in state', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });
});
