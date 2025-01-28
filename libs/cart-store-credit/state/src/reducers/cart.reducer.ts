import { DaffCart } from '@daffodil/cart';
import {
  DaffCartOperationType,
  DaffCartReducerState,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffState } from '@daffodil/core/state';

import {
  DaffCartStoreCreditActions,
  DaffCartStoreCreditActionTypes,
} from '../actions/public_api';

export function daffCartStoreCreditCartReducer<T extends DaffCartWithStoreCredit = DaffCartWithStoreCredit>(
  state = daffCartReducerInitialState,
  action: DaffCartStoreCreditActions,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartStoreCreditActionTypes.StoreCreditRemoveAction:
    case DaffCartStoreCreditActionTypes.StoreCreditApplyAction:
      return {
        ...state,
        loading: {
          ...state.loading,
          [DaffCartOperationType.Cart]: DaffState.Updating,
        },
      };

    case DaffCartStoreCreditActionTypes.StoreCreditRemoveSuccessAction:
    case DaffCartStoreCreditActionTypes.StoreCreditApplySuccessAction:
      return {
        ...state,
        errors: {
          ...state.errors,
          [DaffCartOperationType.Cart]: [],
        },
        cart: {
          ...state.cart,
          ...action.payload,
        },
        loading: {
          ...state.loading,
          [DaffCartOperationType.Cart]: DaffState.Stable,
        },
      };

    case DaffCartStoreCreditActionTypes.StoreCreditApplyFailureAction:
    case DaffCartStoreCreditActionTypes.StoreCreditRemoveFailureAction:
      return {
        ...state,
        errors: {
          ...state.errors,
          [DaffCartOperationType.Cart]: action.payload,
        },
        loading: {
          ...state.loading,
          [DaffCartOperationType.Cart]: DaffState.Stable,
        },
      };

    default:
      return state;
  }
}
