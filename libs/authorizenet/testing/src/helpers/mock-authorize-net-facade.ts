import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthorizeNetFacadeInterface } from '@daffodil/authorizenet';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
  isAcceptJsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentError$: BehaviorSubject<string> = new BehaviorSubject(null);
  acceptJsLoadError$: BehaviorSubject<string> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
