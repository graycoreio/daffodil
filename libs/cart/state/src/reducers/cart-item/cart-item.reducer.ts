import { DaffCart } from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import { DaffState } from '@daffodil/core/state';

import { DaffCartItemActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.Item);
const resetErrors = initializeErrorResetter(DaffCartOperationType.Item);
const setLoading = initializeLoadingSetter(DaffCartOperationType.Item);

export function cartItemReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListAction:
    case DaffCartItemActionTypes.CartItemLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };
    case DaffCartItemActionTypes.CartItemUpdateAction:
    case DaffCartItemActionTypes.CartItemDeleteAction:
    case DaffCartItemActionTypes.CartItemDeleteOutOfStockAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartItemActionTypes.CartItemAddAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Adding),
      };

    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload.id
              ? action.payload
              : item,
          ),
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction:
      return {
        ...state,
        errors: {
          ...state.errors,
          [DaffCartOperationType.Item]: [],
          // out of stock errors can be in the main cart, remove them here
          [DaffCartOperationType.Cart]: state.errors[DaffCartOperationType.Cart].filter(({ code }) => code !== DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK),
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartItemActionTypes.CartItemListFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemAddFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteOutOfStockFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
