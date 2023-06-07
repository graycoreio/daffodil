import {
  daffPaymentInitialState,
  DaffPaymentReducerState,
  DaffPaymentStateReducerAdapter,
} from '@daffodil/payment/state';

import {
  DaffPaypalActionTypes,
  DaffPaypalActions,
} from '../../actions/paypal.actions';

export function daffPaypalPaymentReducer(
  state = daffPaymentInitialState,
  action: DaffPaypalActions,
): DaffPaymentReducerState {
  const adapter = new DaffPaymentStateReducerAdapter();
  switch (action.type) {
    case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
      return adapter.generateToken(state);

    case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
      return adapter.tokenGenerated(state);

    case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
      return adapter.storeError([action.payload], state);

    default:
      return state;
  }
}
