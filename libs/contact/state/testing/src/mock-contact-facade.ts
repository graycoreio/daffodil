import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { DaffContactFacadeInterface } from '@daffodil/contact';

@Injectable({providedIn: 'root'})
export class MockDaffContactFacade implements DaffContactFacadeInterface {
  success$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {};
}
