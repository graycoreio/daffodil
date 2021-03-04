import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthorizeNetFacadeInterface } from '@daffodil/authorizenet/state';
import { DaffStateError } from '@daffodil/core/state';

@Injectable({ providedIn: 'root' })
export class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
  isAcceptJsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentError$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);
  acceptJsLoadError$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
