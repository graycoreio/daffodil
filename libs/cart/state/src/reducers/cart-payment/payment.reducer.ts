import { ActionReducer } from '@ngrx/store';

import {
  daffPaymentInitialState,
  DaffPaymentReducerState,
  DaffPaymentStateReducerAdapter,
} from '@daffodil/payment/state';

import {
  DaffCartPaymentActions,
  DaffCartPaymentActionTypes,
} from '../../actions/public_api';

export const daffCartPaymentReducer: ActionReducer<DaffPaymentReducerState> = (
  state = daffPaymentInitialState,
  action: DaffCartPaymentActions,
): DaffPaymentReducerState => {
  const adapter = new DaffPaymentStateReducerAdapter();
  switch (action.type) {
    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
      return adapter.tokenGenerated(state);

    case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction:
      return adapter.storeError(action.payload, state);

    default:
      return state;
  }
};
