import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
  createEffect,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  of,
  EMPTY,
} from 'rxjs';
import { Observable } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffNewsletterActionTypes,
  DaffNewsletterSubscribe,
  DaffNewsletterSuccessSubscribe,
  DaffNewsletterFailedSubscribe,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
} from '../actions/newsletter.actions';
import {
  DaffNewsletterDriver,
  DaffNewsletterServiceInterface,
} from '../driver/public_api';
import { DaffNewsletterSubmission } from '../models/newsletter.model';

@Injectable()
export class DaffNewsletterEffects<T extends DaffNewsletterSubmission, V>{

  constructor(
    private actions$: Actions,
    @Inject(DaffNewsletterDriver) private driver: DaffNewsletterServiceInterface<T, V>) { }

  trySubmission$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction,
      DaffNewsletterActionTypes.NewsletterRetry,
      DaffNewsletterActionTypes.NewsletterCancelAction),
    switchMap((action: DaffNewsletterSubscribe<T> | DaffNewsletterRetry<T> | DaffNewsletterCancel) => {
      if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
        return of(action);
      } else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry){
        return this.driver.send(action.payload).pipe(
          map((resp: V) => new DaffNewsletterSuccessSubscribe()),
          catchError(error => of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'))),
        );
      }
    }),
    ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction),
  ));
}
