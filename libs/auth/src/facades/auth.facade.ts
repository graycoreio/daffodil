import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffAuthModule } from '../auth.module';
import { selectAuthToken, selectAuthLoading, selectAuthErrors } from '../selectors/auth.selector';
import { AuthReducersState } from '../reducers/auth-reducers.interface';
import { DaffAuthFacadeInterface } from '../interfaces/auth-facade.interface';

@Injectable({
  providedIn: DaffAuthModule
})
export class DaffAuthFacadeService implements DaffAuthFacadeInterface {
  /**
   * The auth retrieved in a single auth call.
   */
  token$: Observable<string>;
  /**
   * The loading state for performing auth operations.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with auth operations.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<AuthReducersState>) {
    this.token$ = this.store.pipe(select(selectAuthToken));
    this.loading$ = this.store.pipe(select(selectAuthLoading));
    this.errors$ = this.store.pipe(select(selectAuthErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
