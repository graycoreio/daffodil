import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';
import { DaffLoadingState } from '@daffodil/core/state';

import { DaffCartCouponActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.Coupon);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Coupon);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Coupon);

export function cartCouponReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartCouponActionTypes.CartCouponListAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartCouponActionTypes.CartCouponApplyAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartCouponActionTypes.CartCouponClearErrorsAction:
      return {
        ...state,
        ...resetErrors(state.errors),
      };

    case DaffCartCouponActionTypes.CartCouponListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          coupons: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartCouponActionTypes.CartCouponApplyFailureAction:
    case DaffCartCouponActionTypes.CartCouponListFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction:
    case DaffCartCouponActionTypes.CartCouponRemoveFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
