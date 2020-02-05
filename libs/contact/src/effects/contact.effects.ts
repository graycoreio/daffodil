import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, EMPTY } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { DaffContactServiceInterface, DaffContactDriver } from '../driver/interfaces/contact-service.interface';

import { DaffContactActionTypes, DaffContactSubmit, DaffContactCancel, DaffContactSuccessSubmit, DaffContactFailedSubmit, DaffContactRetry } from '../actions/contact.actions';

@Injectable()
export class DaffContactEffects<T, V>{
  constructor(
    private actions$: Actions,
    @Inject(DaffContactDriver) private driver: DaffContactServiceInterface<T, V>
  ) { }

  trySubmission$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffContactActionTypes.ContactSubmitAction,
      DaffContactActionTypes.ContactRetryAction,
      DaffContactActionTypes.ContactCancelAction),
    switchMap((action: DaffContactSubmit<T> | DaffContactRetry<T> | DaffContactCancel) => {
      if (action instanceof DaffContactCancel) {
        return EMPTY;
      }
      else {
        return this.submitContact(action.payload);
      }
    })
  ));
  private submitContact(contact: T): Observable<Action> {
    return this.driver.send(contact).pipe(
      map((resp: V) => {
        return new DaffContactSuccessSubmit();
      }),
      catchError(error => {
        return of(new DaffContactFailedSubmit(['Failed to submit']));
      })
    )
  }
}