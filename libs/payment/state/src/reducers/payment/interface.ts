import { DaffStateError } from '@daffodil/core/state';

/**
 * The main payment state.
 * Contains info about the current or most recent payment operation.
 */
export interface DaffPaymentReducerState {
  /**
   * Whether there is a pending payment operation.
   */
  loading: boolean;
  /**
   * A list of payment errors, if any.
   */
  errors: DaffStateError[];
}
