import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { DaffNewsletterFacadeInterface } from 'libs/newsletter/state/src/public_api';

@Injectable({providedIn: 'root'})
export class MockDaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$ : BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: BehaviorSubject<string> = new BehaviorSubject(null);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {}
}
