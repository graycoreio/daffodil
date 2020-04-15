import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthorizeNetFacadeInterface, DaffAuthorizeNetTokenResponse } from '@daffodil/authorizenet';

export class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
	authorizeTokenResponse$: BehaviorSubject<DaffAuthorizeNetTokenResponse> = new BehaviorSubject(null);
  tokenNonce$: BehaviorSubject<string> = new BehaviorSubject(null);
  error$: BehaviorSubject<string> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
