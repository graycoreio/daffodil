import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartCouponActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.Coupon);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Coupon);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Coupon);

export function cartCouponReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartCouponActionTypes.CartCouponListAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartCouponActionTypes.CartCouponApplyAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

    case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartCouponActionTypes.CartCouponListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          coupons: action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartCouponActionTypes.CartCouponApplyFailureAction:
    case DaffCartCouponActionTypes.CartCouponListFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
