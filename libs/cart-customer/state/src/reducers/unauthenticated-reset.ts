import { ActionReducer } from '@ngrx/store';

import {
  DaffAuthActionTypes,
  DaffAuthActions,
} from '@daffodil/auth/state';
import {
  DaffCartReducersState,
  daffCartItemEntitiesAdapter,
  daffCartOrderInitialState,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';

const initialState: DaffCartReducersState = {
  cart: daffCartReducerInitialState,
  cartItems: daffCartItemEntitiesAdapter().getInitialState(),
  order: daffCartOrderInitialState,
};

/**
 * Resets cart state when the user is unauthenticated.
 */
export const daffCartCustomerUnauthenticatedReset: ActionReducer<DaffCartReducersState> = (
  state = initialState,
  action: DaffAuthActions,
) => {
  switch (action.type) {
    case DaffAuthActionTypes.ResetToUnauthenticatedAction:
      return initialState;

    default:
      return state;
  }
};
