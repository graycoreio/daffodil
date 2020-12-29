import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffPaypalFacadeInterface, DaffPaypalTokenResponse } from '@daffodil/paypal';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDaffPaypalFacade implements DaffPaypalFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	paypalTokenResponse$: BehaviorSubject<DaffPaypalTokenResponse> = new BehaviorSubject(null);
	paypalToken$: BehaviorSubject<string> = new BehaviorSubject(null);
	paypalStartUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
	paypalEditUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
  error$: BehaviorSubject<string> = new BehaviorSubject(null);
  dispatch(action: Action) {};
}
