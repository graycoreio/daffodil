import { DaffStateError } from '@daffodil/core/state';

import { DaffPaymentReducerState } from './interface';

/**
 * Manages {@link DaffPaymentReducerState}.
 */
export class DaffPaymentStateReducerAdapter {

  /**
   * Begins the payment operation flow.
   * Sets loading to true.
   */
  generateToken(state: DaffPaymentReducerState): DaffPaymentReducerState {
    return {
      ...state,
      loading: true,
    };
  }

  /**
   * Sets loading to false and resets errors.
   */
  tokenGenerated(state: DaffPaymentReducerState): DaffPaymentReducerState {
    return {
      ...state,
      loading: false,
      errors: [],
    };
  }

  /**
   * Stores the from a failed payment.
   * Also sets loading to false.
   */
  storeError(error: DaffStateError, state: DaffPaymentReducerState): DaffPaymentReducerState {
    return {
      ...state,
      errors: [
        ...state.errors,
        error,
      ],
      loading: false,
    };
  }
}
