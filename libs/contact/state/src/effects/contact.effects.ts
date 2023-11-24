import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
  EMPTY,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DAFF_CONTACT_ERROR_MATCHER } from '@daffodil/contact';
import {
  DaffContactServiceInterface,
  DaffContactDriver,
  DaffContactRequest,
} from '@daffodil/contact/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffContactActionTypes,
  DaffContactSubmit,
  DaffContactCancel,
  DaffContactSuccessSubmit,
  DaffContactFailedSubmit,
  DaffContactRetry,
} from '../actions/contact.actions';

@Injectable()
export class DaffContactEffects {
  constructor(
    private actions$: Actions,
    @Inject(DaffContactDriver)
    private driver: DaffContactServiceInterface,
    @Inject(DAFF_CONTACT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  trySubmission$: Observable<Action> = createEffect(() =>
	  this.actions$.pipe(
	    ofType(
	      DaffContactActionTypes.ContactSubmitAction,
	      DaffContactActionTypes.ContactRetryAction,
	      DaffContactActionTypes.ContactCancelAction,
	    ),
	    switchMap(
	      (
	        action:
          | DaffContactSubmit
          | DaffContactRetry
          | DaffContactCancel,
	      ) => {
	        if (action instanceof DaffContactCancel) {
	          return EMPTY;
	        } else {
	          return this.submitContact(action.payload);
	        }
	      },
	    ),
	  ),
  );

  private submitContact(contact: DaffContactRequest): Observable<Action> {
	  return this.driver.send(contact).pipe(
	    map(() => new DaffContactSuccessSubmit()),
	    catchError((error: DaffError) => of(new DaffContactFailedSubmit([this.errorMatcher(error)]))),
	  );
  }
}
