import {
  DaffCartPlaceOrder,
  DaffCartOrderReducerState,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  daffCartOrderInitialState as initialState,
  DaffCartActionTypes,
  DaffCartClearSuccess,
  DaffCartCreateSuccess,
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
} from '@daffodil/cart/state';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffCartOrderReducer as reducer } from './cart-order.reducer';

describe('@daffodil/cart/state | daffCartOrderReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};
      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartPlaceOrderAction is triggered', () => {
    it('should indicate that the place order operation is in progress', () => {
      const cartPlaceOrderAction = new DaffCartPlaceOrder();

      const result = reducer(initialState, cartPlaceOrderAction);

      expect(result.loading).toEqual(DaffState.Updating);
    });
  });

  describe('when CartPlaceOrderSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;
    let orderId;
    let cartId;

    beforeEach(() => {
      orderId = 'orderId';
      cartId = 'cartId';
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const cartPlaceOrderSuccess = new DaffCartPlaceOrderSuccess({
        orderId,
        cartId,
      });

      result = reducer(state, cartPlaceOrderSuccess);
    });

    it('should set the order result from action.payload', () => {
      expect(result.cartOrderResult.orderId).toEqual(orderId);
      expect(result.cartOrderResult.cartId).toEqual(cartId);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          ...initialState.errors,
          error,
        ],
      };

      const cartPlaceOrderFailure = new DaffCartPlaceOrderFailure([error]);

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should set the action errors in state', () => {
      expect(result.errors).toEqual([error]);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartClearSuccess>{
        type: DaffCartActionTypes.CartClearSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartCreateSuccess>{
        type: DaffCartActionTypes.CartCreateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when AddToCartSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffAddToCartSuccess>{
        type: DaffCartActionTypes.AddToCartSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartBillingAddressUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartBillingAddressUpdateSuccess>{
        type: DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartShippingAddressUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartShippingAddressUpdateSuccess>{
        type: DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartAddressUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartAddressUpdateSuccess>{
        type: DaffCartAddressActionTypes.CartAddressUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartCouponApplySuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartCouponApplySuccess>{
        type: DaffCartCouponActionTypes.CartCouponApplySuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartCouponRemoveSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartCouponRemoveSuccess>{
        type: DaffCartCouponActionTypes.CartCouponRemoveSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartCouponRemoveAllSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartCouponRemoveAllSuccess>{
        type: DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartItemUpdateSuccess>{
        type: DaffCartItemActionTypes.CartItemUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartItemAddSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartItemAddSuccess>{
        type: DaffCartItemActionTypes.CartItemAddSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartItemDeleteSuccess>{
        type: DaffCartItemActionTypes.CartItemDeleteSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartItemDeleteOutOfStockSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartItemDeleteOutOfStockSuccess>{
        type: DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPaymentRemoveSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartPaymentRemoveSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartPaymentUpdateSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateWithBillingSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartPaymentUpdateWithBillingSuccess>{
        type: DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartShippingInformationUpdateSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartShippingInformationUpdateSuccess>{
        type: DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartShippingInformationDeleteSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const action = <DaffCartShippingInformationDeleteSuccess>{
        type: DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction,
      };

      result = reducer(state, action);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });
});
