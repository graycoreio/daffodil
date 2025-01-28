import {
  DaffCart,
  DaffCartAddress,
  DaffCartCoupon,
  DaffCartItemInput,
  DaffCartOrderResult,
  DaffCartPaymentMethod,
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';
import { DaffLoadingState } from '@daffodil/core/state';

import { daffCartOrderInitialState } from './cart-order-initial-state';
import { DaffCartOrderReducerState } from './cart-order-state.interface';
import {
  DaffCartActionTypes,
  DaffCartAddressActionTypes,
  DaffCartBillingAddressActionTypes,
  DaffCartCouponActionTypes,
  DaffCartItemActionTypes,
  DaffCartOrderActionTypes,
  DaffCartPaymentActionTypes,
  DaffCartShippingAddressActionTypes,
  DaffCartShippingInformationActionTypes,
} from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';

export function daffCartOrderReducer<T extends DaffCartOrderResult = DaffCartOrderResult>(
  state = daffCartOrderInitialState,
  action: ActionTypes<
    DaffCart,
    DaffCartItemInput,
    T
  >,
): DaffCartOrderReducerState<T> {
  switch (action.type) {
    case DaffCartOrderActionTypes.CartPlaceOrderAction:
      return {
        ...state,
        loading: DaffState.Updating,
      };

    case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
      return {
        ...state,
        errors: [],
        loading: DaffState.Stable,
        cartOrderResult: action.payload,
      };

    case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
      return {
        ...state,
        loading: DaffState.Stable,
        errors: action.payload,
      };

    case DaffCartActionTypes.CartClearSuccessAction:
    case DaffCartActionTypes.CartCreateSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
    case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return {
        ...state,
        errors: [],
      };

    default:
      return state;
  }
}
