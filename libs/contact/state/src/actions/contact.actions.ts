import { Action } from '@ngrx/store';

import { DaffContactRequest } from '@daffodil/contact/driver';
import { DaffStateError } from '@daffodil/core/state';

export enum DaffContactActionTypes {
  ContactSubmitAction = '[Daff-Contact] Contact Submit Action',
  ContactCancelAction = '[Daff-Contact] Contact Cancel Action',
  ContactSuccessSubmitAction = '[Daff-Contact] Contact Success Submit Action',
  ContactFailedSubmitAction = '[Daff-Contact] Contact Failed Submit Action',
  ContactRetryAction = '[Daff-Contact] Contact Retry Action',
  ContactResetAction = '[Daff-Contact] Contact Reset Action',
}

/**
 * An action triggered upon submitting a contact request.
 *
 * @param payload - a contact request payload
 */
export class DaffContactSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactSubmitAction;

  constructor(public payload: DaffContactRequest) {}
}

/**
 * An action triggered upon resubmitting a contact request.
 *
 * @param payload - a contact request payload
 */
export class DaffContactRetry implements Action {
  readonly type = DaffContactActionTypes.ContactRetryAction;

  constructor(public payload: DaffContactRequest) {}
}

/**
 * An action triggered upon failure of a contact request submission.
 *
 * @param payload - an array of errors
 */
export class DaffContactFailedSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactFailedSubmitAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * An action triggered upon cancelling a contact request.
 */
export class DaffContactCancel implements Action {
  readonly type = DaffContactActionTypes.ContactCancelAction;
}

/**
 * An action triggered upon success of a contact request submission.
 */
export class DaffContactSuccessSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactSuccessSubmitAction;
}

/**
 * An action triggered upon resetting of a contact.
 */
export class DaffContactReset implements Action {
  readonly type = DaffContactActionTypes.ContactResetAction;
}

export type DaffContactActions =
  | DaffContactSubmit
  | DaffContactRetry
  | DaffContactFailedSubmit
  | DaffContactCancel
  | DaffContactSuccessSubmit
  | DaffContactReset;
