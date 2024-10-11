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
import {
  EMPTY,
  of,
} from 'rxjs';
import { Observable } from 'rxjs';
import {
  switchMap,
  map,
} from 'rxjs/operators';

import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffNewsletterResponse } from '@daffodil/newsletter';
import {
  DaffNewsletterDriver,
  DaffNewsletterServiceInterface,
} from '@daffodil/newsletter/driver';

import {
  DaffNewsletterActionTypes,
  DaffNewsletterSubscribe,
  DaffNewsletterSubscribeSuccess,
  DaffNewsletterSubscribeFailure,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
} from '../actions/newsletter.actions';
import { DAFF_NEWSLETTER_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffNewsletterEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffNewsletterDriver) private driver: DaffNewsletterServiceInterface,
    @Inject(DAFF_NEWSLETTER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) { }

  trySubmission$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(
      DaffNewsletterActionTypes.Subscribe,
      DaffNewsletterActionTypes.Retry,
      DaffNewsletterActionTypes.Cancel,
    ),
    switchMap((action: DaffNewsletterSubscribe | DaffNewsletterRetry | DaffNewsletterCancel) => {
      if ((action.type === DaffNewsletterActionTypes.Cancel)) {
        return EMPTY;
      } else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry){
        return this.driver.send(action.payload).pipe(
          map((resp: DaffNewsletterResponse) => new DaffNewsletterSubscribeSuccess()),
          catchAndArrayifyErrors((errors) => of(new DaffNewsletterSubscribeFailure(errors.map(this.errorMatcher)))),
        );
      }
    }),
  ));
}
