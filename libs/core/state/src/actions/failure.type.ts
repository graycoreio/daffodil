import { Action } from '@ngrx/store';

import { DaffStateError } from '../errors/state-error.interface';

export interface DaffFailable {
  /**
   * A list of errors that occured during the operation.
   */
  readonly payload: DaffStateError[];
}

/**
 * An action that represents a failure of an operation.
 */
export interface DaffFailureAction extends DaffFailable, Action {}
