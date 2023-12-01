import { Action } from '@ngrx/store';

import { DaffStateError } from '../errors/state-error.interface';

/**
 * An action that represents a failure of an operation.
 */
export interface DaffFailureAction extends Action {
  /**
   * A list of errors that occured during the operation.
   */
  readonly payload: DaffStateError[];
}
