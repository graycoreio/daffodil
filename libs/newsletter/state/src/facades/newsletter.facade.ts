import { Injectable } from '@angular/core';
import {
  Store,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffNewsletterFacadeInterface } from './newsletter-facade.interface';
import { DaffNewsletterStateRootSlice } from '../reducers/newsletter.reducer';
import {
  selectDaffNewsletterSuccess,
  selectDaffNewsletterError,
  selectDaffNewsletterLoading,
} from '../selectors/newsletter.selector';

@Injectable({ providedIn: 'root' })
export class DaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$: Observable<boolean> = this.store.select(selectDaffNewsletterSuccess);
  error$: Observable<Array<DaffStateError>> = this.store.select(selectDaffNewsletterError);
  loading$: Observable<boolean> = this.store.select(selectDaffNewsletterLoading);

  constructor(private store: Store<DaffNewsletterStateRootSlice>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
