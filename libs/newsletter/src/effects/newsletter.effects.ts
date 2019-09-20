import { Inject } from '@angular/core';
import { of } from 'rxjs';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { DaffNewsletterServiceInterface } from '../driver/interfaces/newsletter-service.interface';
import { DaffNewsletterActionTypes, DaffNewsletterSubscribe, DaffNewsletterSuccessSubscribe, DaffNewsletterFailedSubscribe } from '../actions/newsletter.actions';
import { DaffNewsletterSubmission } from '../models/newsletter.model';
import { DaffNewsletterDriver } from '../driver/injection-tokens/newsletter-driver.token';

export class DaffNewsletterEffects<T extends DaffNewsletterSubmission, V>{

  constructor(
    private actions$: Actions,
    @Inject(DaffNewsletterDriver) private driver: DaffNewsletterServiceInterface<T, V>) { }

  @Effect()
  trySubmission$ = createEffect(() => this.actions$.pipe(
    ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction),
    switchMap((action: DaffNewsletterSubscribe<T>) =>
      this.driver.send(action.payload).pipe(
        map((resp: V) => {
          return new DaffNewsletterSuccessSubscribe();
        }),
        catchError(error => {
          return of(new DaffNewsletterFailedSubscribe("Failed to subscribe to newsletter"));
        })
      )
    ))
  )

}