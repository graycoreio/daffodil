import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export enum DaffNewsletterActionTypes {
  NewsletterSubscribeAction = '[@daffodil/newsletter] Newsletter Subscribe Action',
  NewsletterCancelAction = '[@daffodil/newsletter] Newsletter Cancel Action',
  NewsletterSuccessSubscribeAction = '[@daffodil/newsletter] Succeeded on Newsletter Subscribe Action',
  NewsletterFailedSubscribeAction = '[@daffodil/newsletter] Failed on Newsletter Subscribe Action',
  NewsletterRetry = '[@daffodil/newsletter] Retrying submission',
  NewsletterReset = '[@daffodil/newsletter] Reset Newsletter'
}

export class DaffNewsletterSubscribe<T extends DaffNewsletterSubmission> implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;

  constructor(public payload: T) { }
}
export class DaffNewsletterRetry<T extends DaffNewsletterSubmission> implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterRetry;

  constructor(public payload: T) { }
}

export class DaffNewsletterCancel implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterCancelAction;

}
export class DaffNewsletterFailedSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;

  constructor(public payload: DaffStateError) { }
}
export class DaffNewsletterSuccessSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
}
export class DaffNewsletterReset implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterReset;
}

export type DaffNewsletterActions<T extends DaffNewsletterSubmission> =
  DaffNewsletterSubscribe<T> |
  DaffNewsletterSuccessSubscribe |
  DaffNewsletterFailedSubscribe |
  DaffNewsletterReset |
  DaffNewsletterRetry<T> |
  DaffNewsletterCancel;
