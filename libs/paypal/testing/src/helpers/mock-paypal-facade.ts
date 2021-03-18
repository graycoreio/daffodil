import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalFacadeInterface,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';

@Injectable({ providedIn: 'root' })
export class MockDaffPaypalFacade implements DaffPaypalFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	paypalTokenResponse$: BehaviorSubject<DaffPaypalTokenResponse> = new BehaviorSubject(null);
	paypalToken$: BehaviorSubject<string> = new BehaviorSubject(null);
	paypalStartUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
	paypalEditUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
  error$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);
  dispatch(action: Action) {};
}
