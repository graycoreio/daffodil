import {
  DaffCartCouponActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartErrorType } from '../cart-error-type.enum';
import { DaffCart } from '../../models/cart';

function addError<T extends DaffCart>(state: DaffCartReducerState<T>, error: string) {
  return {
    ...state,
    errors: {
      ...state.errors,
      [DaffCartErrorType.Coupon]: state.errors[DaffCartErrorType.Coupon].concat(new Array(error))
    }
  };
}

function resetErrors<T extends DaffCart>(state: DaffCartReducerState<T>) {
  return {
    errors: {
      ...state.errors,
      [DaffCartErrorType.Coupon]: []
    }
  };
}

export function cartCouponReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartCouponActionTypes.CartCouponApplyAction:
    case DaffCartCouponActionTypes.CartCouponListAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllAction:
      return {
        ...state,
        loading: true
      };

    case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          ...action.payload
        },
        loading: false,
      };

    case DaffCartCouponActionTypes.CartCouponListSuccessAction:
      return {
        ...state,
        ...resetErrors(state),
        cart: {
          ...state.cart,
          coupons: action.payload
        },
        loading: false,
      };

    case DaffCartCouponActionTypes.CartCouponApplyFailureAction:
    case DaffCartCouponActionTypes.CartCouponListFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveFailureAction:
      return {
        ...state,
        ...addError(state, action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
