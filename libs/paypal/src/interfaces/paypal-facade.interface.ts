import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

export interface DaffPaypalFacadeInterface<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
	paypalTokenResponse$: Observable<T>;
	paypalToken$: Observable<string>;
	paypalStartUrl$: Observable<string>;
	paypalEditUrl$: Observable<string>;
  error$: Observable<string>;
}