import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

export enum DaffContactActionTypes {
  ContactSubmitAction = '[@daffodil/contact] Contact Submit Action',
  ContactCancelAction = '[@daffodil/contact] Contact Cancel Action',
  ContactSuccessSubmitAction = '[@daffodil/contact] Contact Success Submit Action',
  ContactFailedSubmitAction = '[@daffodil/contact] Contact Failed Submit Action',
  ContactRetryAction = '[@daffodil/contact] Contact Retry Action',
  ContactResetAction = '[@daffodil/contact] Contact Reset Action',
}

export class DaffContactSubmit<T> implements Action {
  readonly type = DaffContactActionTypes.ContactSubmitAction;

  constructor(public payload: T) {}
}

export class DaffContactRetry<T> implements Action {
  readonly type = DaffContactActionTypes.ContactRetryAction;

  constructor(public payload: T) {}
}
export class DaffContactFailedSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactFailedSubmitAction;

  constructor(public payload: DaffStateError[]) {}
}
export class DaffContactCancel implements Action {
  readonly type = DaffContactActionTypes.ContactCancelAction;
}
export class DaffContactSuccessSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactSuccessSubmitAction;
}
export class DaffContactReset implements Action {
  readonly type = DaffContactActionTypes.ContactResetAction;
}

export type DaffContactActions<T> =
	| DaffContactSubmit<T>
	| DaffContactRetry<T>
	| DaffContactFailedSubmit
	| DaffContactCancel
	| DaffContactSuccessSubmit
	| DaffContactReset;
