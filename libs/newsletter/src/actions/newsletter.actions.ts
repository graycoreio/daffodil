import { Action } from '@ngrx/store';

import { DaffNewsletter } from '../models/newsletter.model';

export enum DaffNewsletterActionTypes {
  NewsletterSubscribeAction = "[Daff-Newsletter] Newsletter Subscribe Action",
  NewsletterCloseAction = "[Daff-Newsletter] Newsletter Close Action",
  NewsletterFailedSubscribeAction = "[Daff-Newsletter] Failed Newsletter Subscribe Action"
}

export class DaffNewsletterSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;

  constructor(public payload: string) { }
}

export class DaffNewsletterClose implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterCloseAction;

  constructor(public payload: string) { }
}

export class DaffNewsletterFailedSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;

  constructor(public payload: string) { }
}


export type DaffNewsletterActions = DaffNewsletterSubscribe |
DaffNewsletterClose |
DaffNewsletterFailedSubscribe;