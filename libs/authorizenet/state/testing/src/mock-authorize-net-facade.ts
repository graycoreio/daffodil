import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { DaffAuthorizeNetFacadeInterface } from '@daffodil/authorizenet/state';
import { DaffStateError } from '@daffodil/core/state';

@Injectable()
export class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
  isAcceptJsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentError$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);
  acceptJsLoadError$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
