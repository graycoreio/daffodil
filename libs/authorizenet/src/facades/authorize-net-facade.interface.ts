import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export interface DaffAuthorizeNetFacadeInterface<T extends DaffAuthorizeNetTokenResponse = DaffAuthorizeNetTokenResponse> extends DaffStoreFacade<Action> {
	authorizeTokenResponse$: Observable<T>
  tokenNonce$: Observable<string>;
  error$: Observable<string>;
}
