import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffAuthFacadeInterface } from '@daffodil/auth/state';
import { DaffStateError } from '@daffodil/core/state';

@Injectable({ providedIn: 'root' })
export class MockDaffAuthFacade implements DaffAuthFacadeInterface<DaffAuthToken> {
  auth$ = new BehaviorSubject<DaffAuthToken>(null);
  token$ = new BehaviorSubject<DaffAuthToken['token']>(null);

  authLoading$ = new BehaviorSubject<boolean>(false);
  authErrors$ = new BehaviorSubject<DaffStateError[]>([]);

  loginLoading$ = new BehaviorSubject<boolean>(false);
  loginErrors$ = new BehaviorSubject<DaffStateError[]>([]);

  registerLoading$ = new BehaviorSubject<boolean>(false);
  registerErrors$ = new BehaviorSubject<DaffStateError[]>([]);

  dispatch(action: Action) {};
}
