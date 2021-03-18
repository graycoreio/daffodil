import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffNewsletterFacadeInterface } from '@daffodil/newsletter';

@Injectable({ providedIn: 'root' })
export class MockDaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<DaffStateError> = new BehaviorSubject(null);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {}
}
