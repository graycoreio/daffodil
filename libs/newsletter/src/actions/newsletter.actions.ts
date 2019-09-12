import { Action } from '@ngrx/store';

import { DaffNewsletter } from '../models/newsletter.model';

export enum DaffNewsletterActionTypes {
  NewsletterSubscribeAction = "[Daff-Newsletter] Newsletter Subscribe Action",
  NewsletterCancelAction = "[Daff-Newsletter] Newsletter Cancel Action",
  NewsletterSuccessSubscribeAction = "[Daff-Newsletter] Succeeded on Newsletter Subscribe Action",
  NewsletterFailedSubscribeAction = "[Daff-Newsletter] Failed on Newsletter Subscribe Action",
  NewsletterRetry = "[Daff-Newsletter] Retrying to cancel newsletter",
  NewsletterReset = "[Daff-Newsletter] Reset Newsletter"
}

export class DaffNewsletterSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;

  constructor(public payload: DaffNewsletter) { }
}
export class DaffNewsletterRetry implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterRetry;

  constructor(public payload: DaffNewsletter) { }
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

export type DaffNewsletterActions = 
  DaffNewsletterSubscribe |
  DaffNewsletterSuccessSubscribe |
  DaffNewsletterFailedSubscribe |
  DaffNewsletterReset |
  DaffNewsletterRetry |
  DaffNewsletterCancel;