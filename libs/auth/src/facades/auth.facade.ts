import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffAuthFeatureState } from '../reducers/public_api';
import {
  getDaffAuthSelectors
} from '../selectors/public_api';
import { DaffAuthToken } from '../models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class DaffAuthFacade<T extends DaffAuthToken = DaffAuthToken> implements DaffStoreFacade<Action> {
  auth$: Observable<T>;
  token$: Observable<T['token']>

  authLoading$: Observable<boolean>;
  authErrors$: Observable<string[]>;

  loginLoading$: Observable<boolean>;
  loginErrors$: Observable<string[]>;

  registerLoading$: Observable<boolean>;
  registerErrors$: Observable<string[]>;

  constructor(private store: Store<DaffAuthFeatureState<T>>) {
    const {
      selectAuthLoginToken,
      selectAuthLoading,
      selectAuthErrors,
      selectAuthLoginLoading,
      selectAuthLoginErrors,
      selectAuthRegisterLoading,
      selectAuthRegisterErrors,
      selectAuthLoginTokenValue
    } = getDaffAuthSelectors<T>();

    this.auth$ = this.store.pipe(select(selectAuthLoginToken));
    this.token$ = this.store.pipe(select(selectAuthLoginTokenValue));

    this.authLoading$ = this.store.pipe(select(selectAuthLoading));
    this.authErrors$ = this.store.pipe(select(selectAuthErrors));

    this.loginLoading$ = this.store.pipe(select(selectAuthLoginLoading));
    this.loginErrors$ = this.store.pipe(select(selectAuthLoginErrors));

    this.registerLoading$ = this.store.pipe(select(selectAuthRegisterLoading));
    this.registerErrors$ = this.store.pipe(select(selectAuthRegisterErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
