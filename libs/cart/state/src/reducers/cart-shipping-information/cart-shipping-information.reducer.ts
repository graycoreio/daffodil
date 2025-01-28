import { DaffCart } from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import { DaffCartShippingInformationActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  initializeErrorAdder,
  initializeErrorResetter,
} from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/cart-loading.type';

const addError = initializeErrorAdder(DaffCartOperationType.ShippingInformation);
const resetErrors = initializeErrorResetter(DaffCartOperationType.ShippingInformation);
const setLoading = initializeLoadingSetter(DaffCartOperationType.ShippingInformation);

export function cartShippingInformationReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Resolving),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffState.Updating),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          shipping_information: action.payload,
        },
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        ...setLoading(state.loading, DaffState.Stable),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, ...action.payload),
        ...setLoading(state.loading, DaffState.Stable),
      };

    default:
      return state;
  }
}
