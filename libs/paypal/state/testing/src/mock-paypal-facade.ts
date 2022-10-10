import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';
import { DaffPaypalFacadeInterface } from '@daffodil/paypal/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffPaypalFacade implements DaffPaypalFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paypalTokenResponse$: BehaviorSubject<DaffPaypalExpressTokenResponse> = new BehaviorSubject(null);
  paypalToken$: BehaviorSubject<string> = new BehaviorSubject(null);
  paypalStartUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
  paypalEditUrl$: BehaviorSubject<string> = new BehaviorSubject(null);
  error$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);
  dispatch(action: Action) {};
}
