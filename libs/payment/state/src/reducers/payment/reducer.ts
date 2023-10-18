import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaymentStateReducerAdapter } from './adapter';
import { daffPaymentInitialState } from './initial-state';
import { DaffPaymentReducerState } from './interface';
import {
  DaffPaymentGenerateToken,
  DaffPaymentActionTypes,
  DaffPaymentActions,
  DaffPaymentGenerateTokenFailure,
} from '../../actions/payment.actions';

/**
 * The reducer for the payment page state, see {@link DaffPaymentReducerState}.
 */
export const daffPaymentReducerFactory = <T extends DaffPaymentResponse = DaffPaymentResponse>(actions: DaffPaymentGenerateToken['type'][]) =>
  (
    state = daffPaymentInitialState,
    action: DaffPaymentActions<T>,
  ): DaffPaymentReducerState => {
    const adapter = new DaffPaymentStateReducerAdapter();
    switch (true) {
      case actions.includes(action.type):
        return adapter.generateToken(state);

      case action.type === DaffPaymentActionTypes.GenerateTokenSuccessAction:
        return adapter.tokenGenerated(state);

      case action.type === DaffPaymentActionTypes.GenerateTokenFailureAction:
        return adapter.storeError([(<DaffPaymentGenerateTokenFailure>action).payload], state);

      default:
        return state;
    }
  };
