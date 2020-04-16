import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffContactFeatureState, selectDaffContactLoading, selectDaffContactError, selectDaffContactSuccess } from '../selectors/contact.selector';
import { DaffContactModule } from '../contact.module';
import { DaffContactFacadeInterface } from './contact-facade.interface';

@Injectable({ providedIn: DaffContactModule })
export class DaffContactFacade implements DaffContactFacadeInterface {

  success$: Observable<boolean> = this.store.select(selectDaffContactSuccess);
  error$: Observable<string[]> = this.store.select(selectDaffContactError);
  loading$: Observable<boolean> = this.store.select(selectDaffContactLoading);

  constructor(private store: Store<DaffContactFeatureState>) {

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}