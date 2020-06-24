import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffAuthorizeNetFacadeInterface } from '@daffodil/authorizenet';

export class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<string> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
