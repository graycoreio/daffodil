import { Action } from '@ngrx/store';

export enum DaffContactActionTypes {
  ContactSubmitAction = '[Daff-Contact] Contact Submit Action',
  ContactCancelAction = '[Daff-Contact] Contact Cancel Action',
  ContactSuccessSubmitAction = '[Daff-Contact] Contact Success Submit Action',
  ContactFailedSubmitAction = '[Daff-Contact] Contact Failed Submit Action',
  ContactRetryAction = '[Daff-Contact] Contact Retry Action',
  ContactResetAction = '[Daff-Contact] Contact Reset Action'
}

export class DaffContactSubmit<T> implements Action {
  readonly type = DaffContactActionTypes.ContactSubmitAction

  constructor(public payload: T) { }
}

export class DaffContactRetry<T> implements Action {
  readonly type = DaffContactActionTypes.ContactRetryAction

  constructor(public payload: T) { }
}
export class DaffContactFailedSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactFailedSubmitAction

  constructor(public payload: string[]) { }
}
export class DaffContactCancel implements Action {
  readonly type = DaffContactActionTypes.ContactCancelAction
}
export class DaffContactSuccessSubmit implements Action {
  readonly type = DaffContactActionTypes.ContactSuccessSubmitAction
}
export class DaffContactReset implements Action {
  readonly type = DaffContactActionTypes.ContactResetAction
}

export type DaffContactActions<T> = 
  DaffContactSubmit<T> |
  DaffContactRetry<T> |
  DaffContactFailedSubmit |
  DaffContactCancel | 
  DaffContactSuccessSubmit | 
  DaffContactReset;