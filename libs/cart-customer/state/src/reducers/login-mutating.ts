import {
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';

import {
  DaffAuthLoginActionTypes,
  DaffAuthLoginActions,
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterActions,
  DaffAuthResetPasswordActionTypes,
  DaffAuthResetPasswordActions,
} from '@daffodil/auth/state';
import {
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartReducersState,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';
import {
  DaffState,
  daffIdentityReducer,
} from '@daffodil/core/state';

/**
 * Sets cart to mutating when the user logs in.
 * This is to correctly represent the cart merge operation that is performed after a login.
 */
export const daffCartCustomerLoginMutatingReducer: ActionReducer<DaffCartReducerState> = (
  state = daffCartReducerInitialState,
  action: DaffAuthLoginActions | DaffAuthRegisterActions | DaffAuthResetPasswordActions,
) => {
  switch (action.type) {
    case DaffAuthLoginActionTypes.LoginSuccessAction:
    case DaffAuthRegisterActionTypes.RegisterSuccessAction:
    case DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction:
      if ((action.type === DaffAuthRegisterActionTypes.RegisterSuccessAction || action.type === DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction) && !action.token) {
        return state;
      }
      return {
        ...state,
        loading: {
          ...state.loading,
          [DaffCartOperationType.Cart]: DaffState.Updating,
        },
      };

    default:
      return state;
  }
};

export const daffCartCustomerLoginMutatingReducerMap: ActionReducerMap<DaffCartReducersState> = {
  cart: daffCartCustomerLoginMutatingReducer,
  cartItems: daffIdentityReducer,
  order: daffIdentityReducer,
};
