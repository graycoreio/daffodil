import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  ofType,
  createEffect,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffNewsletterSubmission,
  DAFF_NEWSLETTER_ERROR_MATCHER,
} from '@daffodil/newsletter';
import {
  DaffNewsletterDriver,
  DaffNewsletterServiceInterface,
} from '@daffodil/newsletter/driver';

import {
  DaffNewsletterActionTypes,
  DaffNewsletterSubscribe,
  DaffNewsletterSuccessSubscribe,
  DaffNewsletterFailedSubscribe,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
} from '../actions/newsletter.actions';
import { DaffNewsletterResponse } from 'libs/newsletter/driver/src/newsletter_response';

@Injectable()
export class DaffNewsletterEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffNewsletterDriver) private driver: DaffNewsletterServiceInterface,
    @Inject(DAFF_NEWSLETTER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) { }

  trySubmission$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction,
      DaffNewsletterActionTypes.NewsletterRetry,
      DaffNewsletterActionTypes.NewsletterCancelAction),
    switchMap((action: DaffNewsletterSubscribe | DaffNewsletterRetry | DaffNewsletterCancel) => {
      if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
        return of(action);
      } else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry){
        return this.driver.send(action.payload).pipe(
          map((resp: DaffNewsletterResponse) => new DaffNewsletterSuccessSubscribe()),
          catchError((error: DaffError) => of(new DaffNewsletterFailedSubscribe(this.errorMatcher(error)))),
        );
      }
    }),
    ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction),
  ));
}
