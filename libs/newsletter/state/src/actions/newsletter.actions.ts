import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export enum DaffNewsletterActionTypes {
  NewsletterSubscribeAction = '[Daff-Newsletter] Newsletter Subscribe Action',
  NewsletterCancelAction = '[Daff-Newsletter] Newsletter Cancel Action',
  NewsletterSuccessSubscribeAction = '[Daff-Newsletter] Succeeded on Newsletter Subscribe Action',
  NewsletterFailedSubscribeAction = '[Daff-Newsletter] Failed on Newsletter Subscribe Action',
  NewsletterRetry = '[Daff-Newsletter] Retrying submission',
  NewsletterReset = '[Daff-Newsletter] Reset Newsletter'
}

/**
 * An action triggered upon subscribing to a newsletter.
 *
 * @param payload - a newsletter submission payload
 */
export class DaffNewsletterSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;

  constructor(public payload: DaffNewsletterSubmission) { }
}

/**
 * An action triggered upon attempting to retry subscribing to a newsletter.
 *
 * @param payload - a newsletter submission payload
 */
export class DaffNewsletterRetry implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterRetry;

  constructor(public payload: DaffNewsletterSubmission) { }
}

/**
 * An action triggered upon cancelling a newsletter subscription request.
 */
export class DaffNewsletterCancel implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterCancelAction;

}

/**
 * An action triggered upon failure of a newsletter subscription request.
 *
 * @param payload - an array of errors
 */
export class DaffNewsletterFailedSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;

  constructor(public payload: DaffStateError) { }
}

/**
 * An action triggered upon success of a newsletter subscription request.
 */
export class DaffNewsletterSuccessSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
}

/**
 * An action triggered upon resetting of a newsletter subscription.
 */
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
