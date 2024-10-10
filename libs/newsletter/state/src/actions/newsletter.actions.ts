import { Action } from '@ngrx/store';

import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export enum DaffNewsletterActionTypes {
  Subscribe = '[@daffodil/newsletter] Subscribe',
  SubscribeSuccess = '[@daffodil/newsletter] Subscribe Success',
  SubscribeFailure = '[@daffodil/newsletter] Subscribe Failure',
  Cancel = '[@daffodil/newsletter] Cancel',
  Retry = '[@daffodil/newsletter] Retrying Submission',
  Reset = '[@daffodil/newsletter] Reset'
}

/**
 * An action triggered upon subscribing to a newsletter.
 *
 * @param payload - a newsletter submission payload
 */
export class DaffNewsletterSubscribe implements Action {
  readonly type = DaffNewsletterActionTypes.Subscribe;

  constructor(public payload: DaffNewsletterSubmission) { }
}

/**
 * An action triggered upon failure of a newsletter subscription request.
 *
 * @param payload - an array of errors
 */
export class DaffNewsletterSubscribeFailure implements DaffFailureAction {
  readonly type = DaffNewsletterActionTypes.SubscribeFailure;

  constructor(public payload: Array<DaffStateError>) {}
}

/**
 * An action triggered upon success of a newsletter subscription request.
 */
export class DaffNewsletterSubscribeSuccess implements Action {
  readonly type = DaffNewsletterActionTypes.SubscribeSuccess;
}

/**
 * An action triggered upon attempting to retry subscribing to a newsletter.
 *
 * @param payload - a newsletter submission payload
 */
export class DaffNewsletterRetry implements Action {
  readonly type = DaffNewsletterActionTypes.Retry;

  constructor(public payload: DaffNewsletterSubmission) { }
}

/**
 * An action triggered upon cancelling a newsletter subscription request.
 */
export class DaffNewsletterCancel implements Action {
  readonly type = DaffNewsletterActionTypes.Cancel;
}

/**
 * An action triggered upon resetting of a newsletter subscription.
 */
export class DaffNewsletterReset implements Action {
  readonly type = DaffNewsletterActionTypes.Reset;
}

export type DaffNewsletterActions =
  DaffNewsletterSubscribe |
  DaffNewsletterSubscribeSuccess |
  DaffNewsletterSubscribeFailure |
  DaffNewsletterReset |
  DaffNewsletterRetry |
  DaffNewsletterCancel;
