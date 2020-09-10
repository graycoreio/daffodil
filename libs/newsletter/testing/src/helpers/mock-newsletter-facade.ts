import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffNewsletterFacadeInterface } from '@daffodil/newsletter';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$ : BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<string> = new BehaviorSubject(null);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {}
}
