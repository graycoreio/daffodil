import { Action } from '@ngrx/store';

import { DaffContactRequest } from '@daffodil/contact/driver';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

export enum DaffContactActionTypes {
  Submit = '[@daffodil/contact] Submit',
  Cancel = '[@daffodil/contact] Cancel ',
  SubmitSuccess = '[@daffodil/contact] Submit Success',
  SubmitFailure = '[@daffodil/contact] Submit Failure',
  Retry = '[@daffodil/contact] Retry',
  Reset = '[@daffodil/contact] Reset',
}

/**
 * An action triggered upon submitting a contact request.
 *
 * @param payload - a contact request payload
 */
export class DaffContactSubmit implements Action {
  readonly type = DaffContactActionTypes.Submit;

  constructor(public payload: DaffContactRequest) {}
}

/**
 * An action triggered upon success of a contact request submission.
 */
export class DaffContactSubmitSuccess implements Action {
  readonly type = DaffContactActionTypes.SubmitSuccess;
}

/**
 * An action triggered upon failure of a contact request submission.
 *
 * @param payload - an array of errors
 */
export class DaffContactSubmitFailure implements DaffFailureAction {
  readonly type = DaffContactActionTypes.SubmitFailure;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * An action triggered upon resubmitting a contact request.
 *
 * @param payload - a contact request payload
 */
export class DaffContactRetry implements Action {
  readonly type = DaffContactActionTypes.Retry;

  constructor(public payload: DaffContactRequest) {}
}

/**
 * An action triggered upon cancelling a contact request.
 */
export class DaffContactCancel implements Action {
  readonly type = DaffContactActionTypes.Cancel;
}

/**
 * An action triggered upon resetting of a contact.
 */
export class DaffContactReset implements Action {
  readonly type = DaffContactActionTypes.Reset;
}

export type DaffContactActions =
  | DaffContactSubmit
  | DaffContactSubmitSuccess
  | DaffContactSubmitFailure
  | DaffContactRetry
  | DaffContactCancel
  | DaffContactReset;
