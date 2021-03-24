import { Injectable } from '@angular/core';
import {
  Store,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import {
  State,
  selectDaffNewsletterSuccess,
  selectDaffNewsletterError,
  selectDaffNewsletterLoading,
} from '../selectors/newsletter.selector';
import { DaffNewsletterFacadeInterface } from './newsletter-facade.interface';

@Injectable({ providedIn: 'root' })
export class DaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$: Observable<boolean> = this.store.select(selectDaffNewsletterSuccess);
  error$: Observable<DaffStateError> = this.store.select(selectDaffNewsletterError);
  loading$: Observable<boolean> = this.store.select(selectDaffNewsletterLoading);

  constructor(private store: Store<State>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
