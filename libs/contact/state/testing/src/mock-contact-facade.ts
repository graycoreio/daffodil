import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffContactFacadeInterface } from '@daffodil/contact/state';
import { DaffStateError } from '@daffodil/core/state';

@Injectable({ providedIn: 'root' })
export class MockDaffContactFacade implements DaffContactFacadeInterface {
  success$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<DaffStateError[]> = new BehaviorSubject([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {};
}
