import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffContactFacadeInterface } from '@daffodil/contact';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDaffContactFacade implements DaffContactFacadeInterface {
  success$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {};
}