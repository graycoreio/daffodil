import { DaffLoadingState } from '@daffodil/core/state';

import {
  DaffCartShippingInformationActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCart } from '../../models/cart';
import { initializeErrorAdder, initializeErrorResetter } from '../errors/error-state-helpers';
import { initializeLoadingSetter } from '../loading/loading-state-helpers';

const addError = initializeErrorAdder(DaffCartOperationType.ShippingInformation);
const resetErrors = initializeErrorResetter(DaffCartOperationType.ShippingInformation);
const setLoading = initializeLoadingSetter(DaffCartOperationType.ShippingInformation);

export function cartShippingInformationReducer<T extends DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Resolving)
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction:
      return {
        ...state,
        ...setLoading(state.loading, DaffLoadingState.Mutating)
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          // TODO: remove workaround
          shipping_information: {...action.payload, address_id: null}
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return {
        ...state,
        ...resetErrors(state.errors),
        cart: {
          ...state.cart,
          // ensure that shipping_information is set to null in case its not included in action.payload
          shipping_information: null,
          ...action.payload
        },
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
      return {
        ...state,
        ...addError(state.errors, action.payload),
        ...setLoading(state.loading, DaffLoadingState.Complete),
      };

    default:
      return state;
  }
}
