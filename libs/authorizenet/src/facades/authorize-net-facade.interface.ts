import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export interface DaffAuthorizeNetFacadeInterface<T extends DaffAuthorizeNetTokenResponse = DaffAuthorizeNetTokenResponse> {
	authorizeTokenResponse$: Observable<T>
  tokenNonce$: Observable<string>;
  error$: Observable<string>;

  dispatch(action: Action): void;
}
