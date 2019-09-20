import { Action } from '@ngrx/store';

import { DaffNewsletterSubmission } from '../models/newsletter.model';

export enum DaffNewsletterActionTypes {
  NewsletterSubscribeAction = "[Daff-Newsletter] Newsletter Subscribe Action",
  NewsletterCancelAction = "[Daff-Newsletter] Newsletter Cancel Action",
  NewsletterSuccessSubscribeAction = "[Daff-Newsletter] Succeeded on Newsletter Subscribe Action",
  NewsletterFailedSubscribeAction = "[Daff-Newsletter] Failed on Newsletter Subscribe Action",
  NewsletterRetry = "[Daff-Newsletter] Retrying submission",
  NewsletterReset = "[Daff-Newsletter] Reset Newsletter"
}

export class DaffNewsletterSubscribe<T extends DaffNewsletterSubmission> implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;

  constructor(public payload: T) { }
}
export class DaffNewsletterRetry implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterRetry;

  constructor(public payload: DaffNewsletterSubmission) { }
}

export class DaffNewsletterCancel implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterCancelAction;
}
export class DaffNewsletterFailedSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;

  constructor(public payload: string) { }
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
  DaffNewsletterRetry |
  DaffNewsletterCancel;