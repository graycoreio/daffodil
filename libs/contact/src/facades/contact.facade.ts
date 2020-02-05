import { Injectable } from '@angular/core';
import { DaffContactModule } from '../contact.module';
import { DaffStoreFacade } from '@daffodil/core';
import { Action, Store } from '@ngrx/store';
import { DaffContactReducerState, selectDaffContactLoading, selectDaffContactError, selectDaffContactSuccess } from '../selectors/contact.selector';
import { Observable } from 'rxjs';

@Injectable({ providedIn: DaffContactModule })
export class DaffContactFacade implements DaffStoreFacade<Action>{

  success$: Observable<boolean> = this.store.select(selectDaffContactSuccess);
  error$: Observable<string[]> = this.store.select(selectDaffContactError);
  loading$: Observable<boolean> = this.store.select(selectDaffContactLoading);

  constructor(private store: Store<DaffContactReducerState>) {

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}